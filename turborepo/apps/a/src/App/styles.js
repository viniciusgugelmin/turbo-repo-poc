import styled, { css } from 'styled-components'

const App = styled.div`
    ${({ $showMF }) => $showMF && css`
        border: 2px solid red;
        margin: 4px;
    `}

    width: 100vw;

    .content {
        margin-top: 8px;
        display: flex;
        width: fit-content;
        padding-left: 16px;

        .item {
            margin: 16px 8px;
        }
    }
`

const ValidateStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 40px;

    ${({ $valid }) => css`background: ${$valid ? "#68ff75" : "#ff6868"}`}
`

export const S = { App, ValidateStatus }