import Error from "../../components/Error";

function error404() {
    document.title = "Error - Kasa";

    return (
        <Error
            title="404"
            subtitle="Oups! La page que "
            subtitle2="vous demandez n'existe pas."
        />
    )
}

export default error404;