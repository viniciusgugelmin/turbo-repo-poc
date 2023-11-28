import { useCalendar, useLocale } from 'react-aria'
import DatePickerPresentation from './Presentation'
import { useCalendarState } from 'react-stately'
import { createCalendar } from '@internationalized/date'

const DatePicker = (props) => {
    const { locale } = useLocale()
    const state = useCalendarState({
        ...props, locale, createCalendar
    })

    const {
        calendarProps
    } = useCalendar(props, state)

    return <DatePickerPresentation {...props} calendarProps={calendarProps} state={state} />
}

export default DatePicker
