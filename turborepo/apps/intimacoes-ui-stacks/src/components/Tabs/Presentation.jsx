import React from 'react'
import { TabList, Tabs, Tab, TabPanel } from 'react-aria-components'

const TabsPresentation = ({ items, activeIndex, onChange, contents }) => {

    return (
        <Tabs
            selectedKey={activeIndex}
            onSelectionChange={onChange}
        >
            <TabList className="flex">
                {items.map(({ label }, index) => {
                    return (
                        <Tab
                            className={`${index === activeIndex ? "bg-white rounded-t-md" : ""} py-2 px-4 focus:outline-none`}
                            key={`tab-${index}-${label}`}
                            id={index}
                            children={label}
                        />
                    )
                })}
            </TabList>

            {contents.map((content, index) => (
                <TabPanel
                    className="bg-white rounded-b-lg rounded-tr-lg shadow-md"
                    key={`tab-content-${index}`}
                    id={index}
                    children={content}
                />
            ))}
        </Tabs>
    )
}

export default TabsPresentation