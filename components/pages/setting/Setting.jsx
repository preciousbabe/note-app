import Sidebar from "../../sidebar/Sidebar"
import "./setting.css"

export default function Setting() {
    return (
    <>
        <div className="setting">
            <div className="settingwrapper">
            <div className="settingtitle">
                <span className="settingupdate">Update your Account </span>
                <span className="settingdelete">Delete your Account</span>
            </div>
            <form className="settingform">
                <label>Profile Picture</label>
                <div className="settingpp">
                    <img className="settingppimg" src="https://images.unsplash.com/photo-1667637020060-5540d5f08648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="lady" />
                <label htmlFor="fileInput">
                <i className="settingppicon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                </div>
                <label>Username:</label>
                <input type="text" placeholder="Username" />
                <label>Email:</label>
                <input type="email" placeholder="Email" />
                <label>Password:</label>
                <input type="Password" placeholder="Password" />
                <button className="settingsubmit">Update</button>
            </form>
            </div>
            <Sidebar />
        </div>
    </>
    );
}