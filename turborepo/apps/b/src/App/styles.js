import styled, { css } from 'styled-components'

const App = styled.div`
    ${({ showMF }) => showMF && css`
        border: 2px solid blue;
        margin: 4px;
    `}

    width: 100vw;

    .content {
        padding-left: 16px;
    }
`

const ValidateStatus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const S = { App, ValidateStatus }