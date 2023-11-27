import React, { useState } from 'react'
import TabsPresentation from './presentation'

const TabsComponents = ({ items, contents }) => {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <TabsPresentation
            items={items}
            activeIndex={currentTab}
            onChange={({ index }) => { setCurrentTab(index) }}
            content={contents[currentTab]}
        />
    )
}

export default TabsComponents