import useGetAxios from "./useAxios";

const Login = () => {

    // const {data, isPending, error} = userFetch('http://localhost:8000/api/newhello/');
    const {data, isPending, error} = useGetAxios('/newhello/');

    return ( <div className="Login">
        <h2>{isPending && <div>Loading..</div>}</h2>
        <h2>{data && data.hello}</h2> 
    </div> );
}
 
export default Login;