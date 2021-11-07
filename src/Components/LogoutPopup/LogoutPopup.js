import { ImCross } from "react-icons/im"
import styles from "./LogoutPopup.module.css"

const LogoutPopup = ({onLogout}) =>{
    return <div className={"logout_popup"}>
        <h2>Logout</h2>
        <p>You have successfully logged out.</p>
        <ImCross onClick={onLogout}/>
    </div>
} 

export default LogoutPopup;