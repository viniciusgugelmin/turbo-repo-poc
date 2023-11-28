const InputWrapper = (props) => {
    const { prefix, suffix, Component, reverse } = props

    const inputPadding = {
        [true]: "3",
        [false]: "7"
    }

    const CLASS_OVERLAY = `${!prefix ? "" : `pl-${inputPadding[!!reverse]}`} ${!suffix ? "" : ""}`
    const REVERSE = reverse ? 'flex-row-reverse' : ''

    const affixPadding = {
        [true]: "pl-2",
        [false]: "pr-2"
    }

    return (
        <div className={`flex items-center ${REVERSE}`}>
            {prefix && <div className={`absolute ${affixPadding[!reverse]}`} children={prefix} />}
            <Component {...props} classOverlay={CLASS_OVERLAY} />
            {suffix && <div className={`absolute ${affixPadding[!!reverse]}`} children={suffix} />}
        </div>
    )
}

export default InputWrapper
