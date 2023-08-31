import { GlobalContextProvider } from 'context'
import { ChartComponent } from './index'

export const Chart = (props) => {

    return (
        <GlobalContextProvider>
            <ChartComponent {...props} />
        </GlobalContextProvider>
    )
}
