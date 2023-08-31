import { styled } from 'styled-components'

export const SInputContainer = styled.div`
    .input-label {
        font-size: .9em;
    }
`

export const SInput = styled.input`
    border: none;
    box-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 4px;
    padding: 2px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms ease all;
    outline: none;

    :hover, :focus {
    }
`