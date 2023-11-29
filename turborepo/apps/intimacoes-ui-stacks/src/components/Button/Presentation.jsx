import { Button } from 'react-aria-components'

const ButtonPresentation = (props) => {
    return (
        <Button
            {...props}
            className={`
                bg-orange-400 rounded w-36 text-white py-1 text-lg shadow
                hover:bg-orange-300
                focus:outline-none focus:bg-orange-500 focus:shadow-lg
            `}
        />
    )
}

export default ButtonPresentation
