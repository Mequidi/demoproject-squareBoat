import classes from "./Header.module.css";

const Header = () =>{
    return <header>
        <div className={classes.navigation}>
            <div className={classes["logo-container"]}>
                My<span>Jobs</span>
            </div>
            <div className={classes["btn-container"]}>
                <button>Login/Signup</button>
            </div>
            <div className={classes.underline}></div>
        </div>
    </header>
}

export default Header
