import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) =>{

    const style = {textDecoration:"none"}

    const beforeLogIn = <div className={classes["btn-container"]}>
                <button>
                    <Link style={style} to="/Login"><span>Login</span></Link>
                    /<Link style={style} to="/Signup"><span>Signup</span></Link>
                </button>
            </div>;
    const afterLogIn = <div className={classes["after-btn-container"]}>
            <button className={classes["post-a-job"]}>Post a Job</button>
            <button className={classes["logout"]} onClick={props.onLogout}>Logout</button>
        </div>
        

    return <header>
        <div className={classes.navigation}>
            <Link style={style} to="/">
                <div className={classes["logo-container"]}>
                    My<span>Jobs</span>
                </div>
            </Link>
            {!props.isLoggedIn ? beforeLogIn:afterLogIn}
            <div className={classes.underline}></div>
        </div>
    </header>
}

export default Header
