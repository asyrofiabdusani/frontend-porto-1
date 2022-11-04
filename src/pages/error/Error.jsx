import { useRouteError } from "react-router-dom";
import "../../assets/style/main.css";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id="error-page"
            className="absolute top-0 left-0 btm-0 right-0 d-flex flex-column align-center just-center"
        >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
