import useAxios from "./useAxios";
import userFetch from "./userFetch";
import { useEffect } from 'react';
import axiosInstance from "./axiosApi";

const Login = () => {

    // const {data, isPending, error} = userFetch('http://localhost:8000/api/newhello/');
    const {data, isPending, error} = useAxios('/newhello/');

    return ( <div className="Login">
        <h2>{data && data.hello}</h2> 
        {/* <h2>{isPending && <div>Loading..</div>}</h2>
        <h2>{error && <div>{error}</div>}</h2>
        <h2>{blogs && blogs.hello}</h2> */}
    </div> );
}
 
export default Login;