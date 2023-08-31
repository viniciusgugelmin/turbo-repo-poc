import { styled } from 'styled-components'

const Credentials = styled.div`
    background: white;
    color: black;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;

    .error-warning {
        color: red;
        font-size: .8em;
    }

    > div {
        display: flex;
        align-items: flex-end;
        gap: 8px;
    }
`

export const S = { Credentials }