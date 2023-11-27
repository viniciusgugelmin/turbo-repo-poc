import tw, { styled } from 'twin.macro'
import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { css } from 'styled-components'

const InputPresentation = ({ placeholder, search = false, rounded = false, inverted = false, width }) => {
    const ROUNDED = rounded ? '-full' : ''

    const INPUT_POS = !inverted ? "-r" : "-l"
    const SLOT_POS = inverted ? "-r" : "-l"

    const Input = styled(TextField.Input)`
        ${!search ? "" : css`
            ${!inverted ? tw`rounded-l-none` : tw`rounded-r-none`};
            ${!inverted ? "border-left: 0;" : "border-right: 0; padding-left: 10px"}
        `}
    `

    return (
        <TextField.Root className={!inverted ? "" : "flex flex-row-reverse"}>
            {search && (
                <TextField.Slot className={`border-y border${SLOT_POS} rounded${SLOT_POS}${ROUNDED} border-blue-600`}>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            )}
            <Input placeholder={placeholder} className={`${width ? `w-${width}` : ""} border-blue-600 rounded${INPUT_POS}${ROUNDED}`} />
        </TextField.Root>
    )
}

export default InputPresentation
