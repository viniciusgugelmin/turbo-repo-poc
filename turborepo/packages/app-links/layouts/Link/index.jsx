import {Button} from "ui";

const Link = ({children, app}) => {
    const baseUrl = import.meta.env.MODE === "development" ? import.meta.env.VITE_BASE_URL : ""

    const apps = {
        a: import.meta.env.VITE_A_PATH,
        b: import.meta.env.VITE_B_PATH,
        workshop: import.meta.env.VITE_WORKSHOP_PATH,
    }

    const url = apps[app] ? baseUrl + apps[app] : "#"

    return (
        <Button link={url}>
            {children}
        </Button>
    )
}

export {Link}