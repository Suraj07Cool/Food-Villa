import {useRouteError} from 'react-router-dom'
const Error=()=>{
    const err=useRouteError();
    const {status, statusText} = err;
    console.log(err);
    return (
        <div className="error"> 
            <h1>{status}!</h1>
            <h2>{statusText}</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default Error;