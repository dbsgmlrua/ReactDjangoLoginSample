import useGetAxios from "./useAxios";
import { useState } from "react";

const Login = () => {
    const [loginForm, setLoginForm] = useState({id: "", pw: ""})
    const [activateBtn, setActivateBtn] = useState(true);
    
    const handleEachInput = (e) => {
        const { id, value } = e.target;
        setLoginForm({...loginForm, [id]: value});
        console.log(loginForm);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginForm);
    };

    return ( 
    <div className="Login">
        <form>
            <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                className="login_input"
                id="id"
                onChange={handleEachInput}
            />
            <input
                type="password"
                placeholder="비밀번호"
                className="password_input"
                id="pw"
                onChange={handleEachInput}
            />

            <div>
                <button onClick={handleSubmit} disabled={!activateBtn}>
                로그인
                </button>
            </div>
        </form>
    </div> );
}
 
export default Login;