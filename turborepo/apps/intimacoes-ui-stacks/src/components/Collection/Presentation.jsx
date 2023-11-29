import { Menu, MenuItem } from 'react-aria-components'

const CollectionPresentation = ({ items }) => {

    return (
        <Menu>
            <MenuItem className="focus:outline-none flex gap-4">
                {items.map(({ content, label, color }, index) => {

                    const gradientClass = `bg-gradient-to-r from-${String(color)}-400 to-${String(color)}-200`

                    return (
                        <div
                            key={`menu-item-${index}`}
                            className={`
                                ${gradientClass}
                                flex flex-col shadow rounded-lg p-2 w-44 text-white
                                cursor-pointer
                            `}
                        >
                            <span className='text-5xl'>{content}</span>
                            <span className='text-lg font-medium'>{label}</span>
                        </div>
                    )
                })}
            </MenuItem>
        </Menu>
    )
}

export default CollectionPresentation