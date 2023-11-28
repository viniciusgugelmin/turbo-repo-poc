import React from 'react'
import { Button, Calendar, CalendarCell, CalendarGrid, DateInput, DateSegment, Dialog, Group, Heading, Label, Popover, RangeCalendar } from 'react-aria-components'

const Basic = (props) => {
    const { range = false, state, calendarProps } = props

    const CalendarComponent = range ? RangeCalendar : Calendar

    return (
        <div {...calendarProps}>
            <Label />
            <Group className="flex gap-2">
                <DateInput className="flex gap-1 bg-blue-100 px-4 border border-gray-600 rounded-full" slot={range ? "start" : ""}>
                    {(segment) => (
                        <DateSegment
                            segment={segment}
                            className={`
                                focus:outline-none
                            `}
                        />
                    )}
                </DateInput>

                {range && (
                    <>
                        <div children="à" />
                        <DateInput className="flex gap-1 bg-blue-100 px-4 border border-gray-600 rounded-full" slot="end">
                            {(segment) => (
                                <DateSegment
                                    segment={segment}
                                    className={`
                            focus:outline-none
                        `}
                                />
                            )}
                        </DateInput>
                    </>
                )}

                <Button children="▼" className="text-gray-600 focus:outline-none" />
            </Group>
            <Popover className='bg-white p-4 w-96 h-fit shadow-lg'>
                <Dialog>
                    <CalendarComponent className='flex flex-col gap-4'>
                        <header className='flex justify-between'>
                            <Button slot="previous" children="◀" />
                            <Heading />
                            <Button slot="next" children="▶" />
                        </header>

                        <CalendarGrid state={state}>
                            {(date) => {
                                return (
                                    <CalendarCell
                                        date={date}
                                        className="flex items-center justify-center"
                                    />
                                )
                            }}
                        </CalendarGrid>
                    </CalendarComponent>
                </Dialog>
            </Popover>
        </div>
    )
}

export default Basic