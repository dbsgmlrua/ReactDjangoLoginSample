import useGetAxios from "./useAxios";
import { useState } from "react";

const loginForm ={
    id: "",
    pw: ""
}

const Login = () => {
    const [state, setState] = useState(loginForm);
    const [activateBtn, setActivateBtn] = useState(true);
    
    const handleEachInput = (e) => {
        const { id, value } = e.target;
        setState({
            [id]: value,
        });
        console.log(state);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
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