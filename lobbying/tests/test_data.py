test_entity_urls = ['https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=eaiHDZ6kDM3fHlDyBbc8oUX2F0/qMX8aZhXGSqISnPo81sWNBWPRVYkBCJOoiSOC',
    'https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=eaiHDZ6kDM3fHlDyBbc8oSXfp14ycsC4C75XzUXuOD0RNTxP5RQlQYtqqNlG19gK',
    'https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=Kce7BzXCV/xrL2hRhIeiyrKq4598/MmeOqNxcRw3anF8llP1KzXu6cA+wFHr/nIU',
    'https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=Tcg7Il3rjW5sIbUrwbcVKYqHMk7FN1E+JyuG2w4SuGbSUM5P5U7i1R+Kl69eLgqM']

test_lobbyist_urls = ['https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=eaiHDZ6kDM3fHlDyBbc8oazP9bD0a9KMVAPrqT2Yinwr4JTgsyzaInIK/BXJHlV1',
    'https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=eaiHDZ6kDM3fHlDyBbc8oWE66BrPrRKWkGd1M0SOekxiCPdVzrEEIQIimWwrunVO',
    'https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=v/mjLQ41YVqm2bof1TANC8QjRgi8rX5lY/Ozmu5hJvE2+nv22rfxUQCNlsde/z4F',
    'https://www.sec.state.ma.us/LobbyistPublicSearch/CompleteDisclosure.aspx?sysvalue=qOH5OAu6URrG3qvY0KcrjT8Cd6HIk4OEVgmMDn8i9vU6n8cVsZ6PiBz3uD4tmhUG']

test_htmls = []
for i in range(4):
    with open(f"lobbying/tests/test_html_{i}.html", "rb") as f:
        test_htmls.append(f.read())
