
import useFetch from "./userFetch";


const Login = () => {
    const { data: blogs,error, isPending } = useFetch('http://localhost:8000/api/newhello');
    return ( <div className="Login">
        <h2>{isPending && <div>Loading..</div>}</h2>
        <h2>{error && <div>{error}</div>}</h2>
        <h2>{blogs && blogs.hello}</h2>
    </div> );
}
 
export default Login;