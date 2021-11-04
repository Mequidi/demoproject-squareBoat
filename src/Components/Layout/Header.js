import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () =>{


    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem("userData")?JSON.parse(localStorage.getItem("userData")).isLoggedIn:false);

    const clickHandler = () =>{
        
    }
    const style = {textDecoration:"none"}
    // const clickHandler = () =>{
    //     let userData = JSON.parse(localStorage.getItem("userData"));
    //     console.log(userData)
    // }

    const beforeLogIn = <div className={classes["btn-container"]}>
                <button>
                    <Link style={style} to="/Login"><span>Login</span></Link>
                    /<Link style={style} to="/Signup"><span>Signup</span></Link>
                </button>
            </div>;
    const afterLogIn = <button 
    onClick={clickHandler}
    >Logout</button>;

    return <header>
        <div className={classes.navigation}>
            <Link style={style} to="/">
                <div className={classes["logo-container"]}>
                    My<span>Jobs</span>
                </div>
            </Link>
            {!isLoggedIn ? beforeLogIn:afterLogIn}
            <div className={classes.underline}></div>
        </div>
    </header>
}

export default Header
