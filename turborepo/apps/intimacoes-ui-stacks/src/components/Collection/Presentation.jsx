import { Menu, MenuItem } from 'react-aria-components'

const CollectionPresentation = ({ items }) => {

    return (
        <Menu>
            <MenuItem className="focus:outline-none flex gap-2">
                {items.map(({ content, label, color }, index) => {

                    return (
                        <div
                            key={`menu-item-${index}`}
                            className={`bg-gradient-to-r from-${color}-400 to-90% flex flex-col shadow rounded-lg px-4 w-44 py-2 text-white`}
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