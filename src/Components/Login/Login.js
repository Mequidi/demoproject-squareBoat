import Card from "../UI Component/Card";
import { useState } from "react";
import InputField from "../UI Component/InputField";
import styles from "./Login.module.css"
import { Link } from "react-router-dom";
import { login } from "../../Utilites/Api";

const Login = () =>{

    const [inputValue, setInputValue] = useState({email :"", password :""});
    const [isInputValid, setIsInputValid] = useState(true); 

    
    const emailChangeHandler = (event) =>{
        const { value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            email: value,
          }));
    }
    const passwordChangeHandler = (event) =>{
        const { value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            password: value,
          }));
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(inputValue);
        login(inputValue);
        setInputValue({email :"", password :""})
    }

    return <Card style={{height: "430px"}}>
        <h2 className={styles["heading"]}>Login</h2>
        <form onSubmit={submitHandler}>
                <InputField 
                placeholder="Enter Your Email"
                name="emailAdd"
                type="email"
                value={inputValue.email}
                label="Email Address"
                onChange={emailChangeHandler}
            />
            <Link style={{textDecoration:"none"}} to="/ForgotPassword"><p className={styles["forgot-password"]}>Forgot your password?</p></Link>
            <InputField 
                placeholder="Enter Your Password"
                name="password"
                type="password"
                value={inputValue.password}
                label="Password"
                onChange={passwordChangeHandler}
            />
            {!isInputValid  && <p className={styles["failure-message"]}>Incorrect email address or password.</p>}
            {/* <Link style={{textDecoration:"none"}} to="/AvailableJobs"><button type="submit" className={styles["login-btn"]}>Login</button></Link> */}
            <button type="submit" className={styles["login-btn"]}>Login</button>
        </form>
        <div className={styles["create-acc-txt"]}>
            <span>New to MyJobs? </span>
            <Link style={{textDecoration:"none"}} to="/Signup"><span className="blue-txt">Create an account</span></Link>
        </div>
    </Card>
}

export default Login;
