import { useRouteError} from "react-router-dom";

const ErrorHandler= ()=> {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>Oops!!</h1>
            <h4>Page Not FOund</h4>
            <p>{err.statusText}</p>
        </div>
    )
}

export default ErrorHandler;