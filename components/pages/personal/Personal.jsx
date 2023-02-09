import Sidebar from "../../sidebar/Sidebar";
import Personalpost from "../../personalpost/Personalpost";
import "./personal.css";

export default function Personal() {
    return (
        <>
        <div className="personal">
            <Personalpost />
            <Sidebar />
        </div>
    </>
    );
}