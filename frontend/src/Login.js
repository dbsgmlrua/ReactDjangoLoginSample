import useFetch from "./userFetch";
import axiosInstance from "./axiosApi";
import { useState, useEffect } from 'react';


const Login = () => {
    const [data , setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    axiosInstance.get('/newhello/')
    .then(function (response){
        setData(response.data);
    });

    return ( <div className="Login">
        <h2>{data && data.hello}</h2> 
        {/* <h2>{isPending && <div>Loading..</div>}</h2>
        <h2>{error && <div>{error}</div>}</h2>
        <h2>{blogs && blogs.hello}</h2> */}
    </div> );
}
 
export default Login;