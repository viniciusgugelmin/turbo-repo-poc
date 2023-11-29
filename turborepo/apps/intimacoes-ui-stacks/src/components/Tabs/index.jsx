import React, { useState } from 'react'
import TabsPresentation from './Presentation'

const TabsComponents = ({ items, contents }) => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <TabsPresentation
            items={items}
            activeIndex={currentTab}
            onChange={(index) => { setCurrentTab(index) }}
            contents={contents}
        />
    )
}

export default TabsComponents