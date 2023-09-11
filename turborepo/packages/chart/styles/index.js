import { styled, css } from 'styled-components'

const Chart = styled.div`
    margin-left: 16px;;
    width: fit-content;
    ${({ showMF }) => showMF && css`
        border: 1px solid orange;
        margin: 4px;
    `}

    table {
        td {
            border-top: 1px solid rgba(0,0,0,.2);
            padding: 0 16px;
        }
    }
`

export const S = { Chart }