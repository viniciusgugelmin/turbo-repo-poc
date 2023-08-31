import { styled, css } from 'styled-components'

const Credentials = styled.div`
    ${({ showMF }) => showMF && css`
        border: 1px solid green;
        margin: 4px;
    `}

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