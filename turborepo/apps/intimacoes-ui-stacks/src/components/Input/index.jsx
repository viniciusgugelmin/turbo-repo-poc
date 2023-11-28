import { useEffect, useRef, useState } from 'react'
import InputPresentation from './Presentation'
import { useTextField } from 'react-aria'

const InputComponent = (props) => {
    const ref = useRef(null)
    const [value, setValue] = useState("")

    const handleChange = (_value) => {
        setValue(_value)
    }

    const componentProps = useTextField(props, ref)

    return (
        <InputPresentation
            value={value}
            onChange={handleChange}
            ref={ref}
            {...props}
            {...componentProps}
        />
    )
}

export default InputComponent
