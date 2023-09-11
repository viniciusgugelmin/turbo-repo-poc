import { GlobalContextProvider } from 'context'
import { CredentialsComponent } from './index'

export const Credentials = (props) => {

    return (
        <GlobalContextProvider>
            <CredentialsComponent {...props} />
        </GlobalContextProvider>
    )
}
