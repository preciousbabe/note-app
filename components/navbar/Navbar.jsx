import { Link } from "react-router-dom"
import "./navbar.css"


export default  function  Navbar() {
    const user = true;
return (
    <div className="nav">
     <div className="navleft">
     <i className=" navicon fa-brands fa-square-facebook"></i>
     <i className=" navicon fa-brands fa-square-twitter"></i>
     <i className=" navicon fa-brands fa-square-pinterest"></i>
     <i className=" navicon fa-brands fa-square-instagram"></i>
     </div>
     <div className="navcenter">
     <ul className="navlist">
      <li className="navlistitem"><Link to="/" className="link">Home</Link></li>
      <li className="navlistitem"> <Link to="/about" className="link">About</Link></li>
      <li className="navlistitem"> <Link to="/contact" className="link">Contact</Link></li>
      <li className="navlistitem"> <Link to="/write" className="link">Write</Link></li>
      <li className="navlistitem">
        { user && "logout"}
      </li>
     </ul>
     </div>
     <div className="navright">
        { user ? (
        <img  className="topimage"
        src="https://images.unsplash.com/photo-1666932520929-c4f447b98224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="lady" />
        ) : ( 
            <ul className="navlist">
                <li className="navlistitem">
            <Link to="/login" className="link">Login</Link>
            </li>
            <li className="navlistitem">
            <Link to="/register" className="link">Register</Link>
            </li>
            </ul>
        )}
   <i className=" navsearchicon fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
);
 }