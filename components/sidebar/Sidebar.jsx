import "./sidebar.css"

export default function Sidebar() {
    return (
    <div className="sidebar">
       <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img  className="sidebarimg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtaWxpbmclMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&h=460" alt="lady" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam, eos vel sed harum nisi corrupti blanditiis? Magni, quaerat possimus! Molestiae, quasi repellendus?</p>
       </div>
       <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
            <li className="sidebarlistitem">Life</li>
            <li className="sidebarlistitem">Music</li>
            <li className="sidebarlistitem">Style</li>
            <li className="sidebarlistitem">Sports</li>
            <li className="sidebarlistitem">Tech</li>
            <li className="sidebarlistitem">Cinema</li>
        </ul>
       </div>
       <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
        <i className=" sidebaricon fa-brands fa-square-facebook"></i>
     <i className=" sidebaricon fa-brands fa-square-twitter"></i>
     <i className=" sidebaricon fa-brands fa-square-pinterest"></i>
     <i className=" sidebaricon fa-brands fa-square-instagram"></i>
        </div>
       </div>
    </div>
    );
}