import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () =>{

    const style = {textDecoration:"none"}

    return <header>
        <div className={classes.navigation}>
            <Link style={style} to="/">
                <div className={classes["logo-container"]}>
                    My<span>Jobs</span>
                </div>
            </Link>
            <div className={classes["btn-container"]}>
                <button>
                    <Link style={style} to="/Login"><span>Login</span></Link>
                    /<Link style={style} to="/Signup"><span>Signup</span></Link>
                </button>
            </div>
            <div className={classes.underline}></div>
        </div>
    </header>
}

export default Header
