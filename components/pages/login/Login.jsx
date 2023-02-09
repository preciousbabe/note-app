import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
    return (
    <>
        <div className="login">
            <span className="logintitle">Login</span>
            <form className="loginform">
                <label>Email</label>
                <input type="email" className="logininput" placeholder="Enter your Email..."/>
                <label>Password</label>
                <input type="password" className="logininput" placeholder="Enter your Password..."/>
                <button className="loginbtn">Login</button>
            </form>
            <button className="registerbttn">
            <Link to="/register" className="link">REGISTER</Link>
            </button>
        </div>
    </>
    );
}