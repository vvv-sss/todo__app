// ___React__________________________________________________________________________________________________________
import { useRef, useState } from "react";
// ___Redux__________________________________________________________________________________________________________
import { useDispatch } from "react-redux";
import { initializeUser } from './authSlice';
// ___Helpers________________________________________________________________________________________________________
import { userSignUp } from "../../helpers/userSignUp";
import { userLogin } from "../../helpers/userLogin";

const Auth = () => {

    const dispatch = useDispatch();

    const [mode, setMode] = useState("sign up");

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [warnMsg, setWarnMsg] = useState(null);

    const signUpBtn = useRef();
    const loginBtn = useRef();

    const handleBtnClick = (e) => {
        e.target.innerText === "Sign Up" ? setMode("sign up") : setMode("login");
        signUpBtn.current.classList.remove("auth-btn-active");
        loginBtn.current.classList.remove("auth-btn-active");
        e.target.classList.add("auth-btn-active");
    }

    const handleSubmit = async (e) => {

        if (password === repeatPassword) {
            const user = {
                "username": username,
                "password": password
            };

            if (mode === "sign up") {
                const data = await userSignUp(user);
                if (data.message) {
                    setWarnMsg(data.message);
                } else {
                    dispatch(initializeUser(data));
                }
            }
            
            if (mode === "login") {
                userLogin(user).then((data) => {
                    if (data.message) {
                        setWarnMsg(data.message);
                    } else {
                        dispatch(initializeUser(data));
                    }
                });
            }
            
        } else {
            setWarnMsg("Check your password match!");
        }
    }

    return ( 
        <section className="auth">
            <div className="auth-btn-container">
                <button 
                    ref={ signUpBtn }
                    className="auth-btn-active" 
                    onClick={ (e) => handleBtnClick(e) }
                >
                    Sign Up
                </button>
                <button 
                    ref={ loginBtn }
                    onClick={ (e) => handleBtnClick(e) }
                >
                    Login
                </button>
            </div>
            { mode === "sign up" && <h1>Please Sign Up</h1> }
            { mode === "login" && <h1>Please Login</h1> }
            { 
                <form onSubmit={ (e) => handleSubmit(e) }>
                    <input 
                        type='text'
                        placeholder="Type your username"
                        required 
                        onChange={ (e) => setUsername(e.target.value) }
                    />
                    <input 
                        type='password' 
                        min="8" 
                        placeholder="Enter your password"
                        required 
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                    <input 
                        type='password' 
                        min="8" 
                        placeholder="Repeat your password"
                        required 
                        onChange={ (e) => setRepeatPassword(e.target.value) }
                    />
                    <input type='submit' value='Submit' />
                    { warnMsg && <span className="auth-msg">{ warnMsg }</span> }
                </form>
            }
        </section>
    );
}

export default Auth;