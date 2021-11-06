import classes from "./Header.module.css";
import { Link,useLocation } from "react-router-dom";
import { useState,useEffect } from 'react'

const Header = (props) =>{

    const [ currentURL, setCurrentURL ] = useState(window.location.pathname);
    let location = useLocation();
    useEffect(() => {
        setCurrentURL(location.pathname);
    }, [location]);
    const style = {textDecoration:"none"}

    const beforeLogIn = currentURL==="/" && <div className={classes["btn-container"]}>
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
