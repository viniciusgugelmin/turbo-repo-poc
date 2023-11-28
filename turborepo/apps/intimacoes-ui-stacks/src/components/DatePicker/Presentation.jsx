import { DatePicker, DateRangePicker } from 'react-aria-components'
import Basic from './layouts/Basic'

const DatePickerPresentation = (props) => {
    const {
        mode = "basic"
    } = props

    const layouts = {
        basic: <DatePicker children={<Basic {...props} />} />,
        range: <DateRangePicker children={<Basic {...props} range />} />
    }

    return layouts[mode]
}

export default DatePickerPresentation