import { Input } from 'react-aria-components'

const Basic = (props) => {
    const { width, rounded, classOverlay, inputProps } = props

    const handleClassState = (props, value) => !props ? "" : value

    const WIDTH = handleClassState(width, `w-${width}`)
    const ROUNDED = handleClassState(rounded, `-full`)

    return (
        <Input
            {...props}
            {...inputProps}
            className={`
                border border-blue-600 rounded${ROUNDED} pl-4 py-1
                focus:outline-none focus:shadow-md
                ${WIDTH}
                ${classOverlay}
            `}
        />
    )
}

export default Basic