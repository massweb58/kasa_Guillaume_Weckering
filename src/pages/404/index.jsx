import Error from "../../components/Error";

function error404() {
    document.title = "Error - Kasa";

    return (
        <Error/>
    )
}

export default error404;