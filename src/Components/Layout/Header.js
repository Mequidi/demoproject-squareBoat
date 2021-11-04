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
            <Link style={style} to="/PostJobs"><button className={classes["post-a-job"]}>Post a Job</button></Link>
            <Link style={style} onClick={props.onLogout} to="/"><button className={classes["logout"]} >Logout</button></Link>
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
