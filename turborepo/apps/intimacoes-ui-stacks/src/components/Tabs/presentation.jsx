import React from 'react'
import { TabMenu } from "primereact/tabmenu"

const TabsPresentation = ({ items, activeIndex, onChange, content }) => {

    return (
        <>
            <TabMenu
                pt={{
                    menuitem: ({ context }) => {
                        if (context.index === activeIndex) return { className: "p-4 bg-white rounded-t-lg" }
                        return 'p-4'
                    }
                }}
                model={items}
                activeIndex={activeIndex}
                onTabChange={onChange}
            />
            <div className='bg-white min-h-content' children={content} />
        </>
    )
}

export default TabsPresentation