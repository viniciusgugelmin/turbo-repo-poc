import React, { useState } from 'react'
import CalendarPresentation from './presentation'

const CalendarComponent = ({ range = false }) => {
    const [date, setDate] = useState(null)


    let props = {}
    if (range) props.selectionMode = "range"

    return (
        <CalendarPresentation
            value={date}
            pt={{
                panel: "bg-white",
                root: "border rounded h-8 border-gray-600",
                select: "bg-red-600"
            }}
            onChange={({ target }) => {
                setDate(target.value)
            }}
            dateFormat="dd/mm/yy"
            {...props}
        />
    )
}

export default CalendarComponent