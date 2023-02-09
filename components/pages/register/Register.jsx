import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return (
    <>
        <div className="register">
            <span className="registertitle">Register</span>
            <form className="registerform">
            <label>Username</label>
                <input type="text" className="registerinput" placeholder="Enter your Username..."/>
                <label>Email</label>
                <input type="email" className="registerinput" placeholder="Enter your Email..."/>
                <label>Password</label>
                <input type="password" className="registerinput" placeholder="Enter your Password..."/>
                <button className="registerbtn">Register</button>
            </form>
            <button className="loginbutton">
                <Link to="/login" className="link">LOGIN</Link>
            </button>
        </div>
    </>
    );
}