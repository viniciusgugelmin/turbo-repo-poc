import { Label, TextField } from 'react-aria-components'
import Basic from './layouts/Basic'
import InputWrapper from './layouts/wrapper'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const InputPresentation = (props) => {
    const {
        mode = "basic",
        labelProps,
        label,
    } = props

    const layouts = {
        basic: <Basic {...props} />,
        search: (
            <InputWrapper
                prefix={<MagnifyingGlassIcon />}
                Component={Basic}
                {...props}
            />
        )
    }


    return (
        <TextField className="flex flex-col">
            {label && <Label {...labelProps} children={label} />}
            {layouts[mode]}
        </TextField>
    )
}

export default InputPresentation
