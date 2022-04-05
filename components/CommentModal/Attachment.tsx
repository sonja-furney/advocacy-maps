import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEventHandler, useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import { Button, Form, InputGroup, Row, Spinner, Col } from "../bootstrap"
import { UseTestimonyAttachment } from "../db"
import { External } from "../links"

// TODO: pass in useEditTestimony, add upload callback to hook.
// Views to update:
// - testimony rows on testimony table, bill detail, and private profile
// - testimony modal on home page, bill detail, testimony table, private profile, and public profile

export function Attachment({
  attachment
}: {
  attachment: UseTestimonyAttachment
}) {
  const { upload, error, id } = attachment
  const [key, setKey] = useState(0),
    clearInput = useCallback(() => setKey(s => s + 1), [])
  const onFileSelected: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      const files = e.target.files
      if (files?.length) {
        const file = files[0]
        upload(file)
      }
    },
    [upload]
  )

  useEffect(() => {
    if (error) clearInput()
  }, [clearInput, error])

  return (
    <Form.Group controlId="testimonyAttachment">
      <Label attachment={attachment} />
      {id ? (
        <Attached attachment={attachment} />
      ) : (
        <InputGroup>
          <Form.Control
            key={key}
            type="file"
            accept="application/pdf"
            onChange={onFileSelected}
          />
        </InputGroup>
      )}
      <StatusMessage attachment={attachment} />
    </Form.Group>
  )
}

const formatSize = (size: number) => {
  if (size > 1e6) {
    return `${(size * 1e-6).toFixed(1)} MB`
  } else {
    return `${(size * 1e-3).toFixed(1)} KB`
  }
}

const Label = ({
  attachment: { status }
}: {
  attachment: UseTestimonyAttachment
}) => {
  return (
    <Form.Label>
      <span className="me-1">PDF Testimony</span>
      {status === "loading" && <Spinner animation="border" size="sm" />}
      {status === "error" && (
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger" />
      )}
    </Form.Label>
  )
}

const Attached = ({
  attachment: { url, name, size, remove, status }
}: {
  attachment: UseTestimonyAttachment
}) => {
  const linkLabel = ["Attached", name, size ? formatSize(size) : null]
      .filter(Boolean)
      .join(" - "),
    viewLink = url ? <External href={url}>{linkLabel}</External> : null
  return (
    <Row className="align-items-center">
      <Col md="auto">{viewLink}</Col>
      <Col>
        <Button onClick={remove} disabled={status === "loading"}>
          Remove
        </Button>
      </Col>
    </Row>
  )
}

const StatusMessage = ({
  attachment: { id, error, status }
}: {
  attachment: UseTestimonyAttachment
}) => {
  if (status === "error") {
    let message: string
    if (error?.code === "storage/unauthorized") {
      message = "Invalid file. Please upload PDF's less than 10 MB"
    } else {
      message = "Something went wrong. Please try again."
    }

    return <Form.Text className="text-danger">{message}</Form.Text>
  } else if (status === "ok" && !id) {
    return <Form.Text>Files must be less than 10 MB</Form.Text>
  } else {
    return null
  }
}
