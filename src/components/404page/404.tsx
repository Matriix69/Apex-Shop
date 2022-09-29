import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, this page doesn't exist</p>
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default ErrorPage;
