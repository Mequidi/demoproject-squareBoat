import { ImCross } from "react-icons/im"

const LogoutPopup = ({onLogout}) =>{
    return <div className={"logout_popup"}>
        <h2>Logout</h2>
        <p>You have successfully logged out.</p>
        <ImCross className={"cross-btn"} onClick={onLogout}/>
    </div>
} 

export default LogoutPopup;