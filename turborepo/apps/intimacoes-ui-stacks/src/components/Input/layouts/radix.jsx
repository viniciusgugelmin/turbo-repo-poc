import tw, { styled } from 'twin.macro'
import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { css } from 'styled-components'

const InputPresentation = (props) => {
    const {
        placeholder,
        inverted = false,
        radius = "small",
        search = false,
        width = null,
    } = props

    const InputContainer = styled(TextField.Root)`
        
    `

    const Input = styled(TextField.Input)`
    `

    const INPUT_WIDTH = !width ? "" : `w-${width}`
    const INVERTED = !inverted ? "" : `pl-4 flex flex-row-reverse`

    return (
        <InputContainer
            className={`${INVERTED}`}
            variant="classic"
            radius={radius}
        >
            {search && (
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            )}
            <Input
                placeholder={placeholder}
                className={`${INPUT_WIDTH}`}
            />
        </InputContainer>
    )
}

export default InputPresentation
