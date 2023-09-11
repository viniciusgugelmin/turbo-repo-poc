import { styled } from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .input-label {
        font-size: .9em;
    }
`

export const Input = styled.input`
    background: white;
    border: none;
    color: black;
    box-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 4px;
    padding: 2px 8px;
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
    transition: 200ms ease all;
    outline: none;

    :hover {
      box-shadow: 0 1px 2px rgba(0,0,0,.7);
    }
`

const S = { Input, InputContainer }

export { S }