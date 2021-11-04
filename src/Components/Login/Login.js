import Card from "../UI Component/Card";
import { useState } from "react";
import InputField from "../UI Component/InputField";
import styles from "./Login.module.css"
import { Link,useHistory } from "react-router-dom";
import { login } from "../../Utilites/Api";

const Login = (props) =>{

    const [inputValue, setInputValue] = useState({email :"", password :""});
    const [ isValid,setIsValid ] = useState(true) 
    const [ fieldTouched,setFieldTouched ] = useState({email:false,password:false})
    const history = useHistory();
    
    
    
    const ChangeHandler = (event) =>{
        const { name,value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const blurHandler = (event) =>{
        const { name } = event.target;
        setFieldTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
        if(inputValue.email && inputValue.password && fieldTouched.email && fieldTouched.password){
        setIsValid(true)
        }
        else    setIsValid(false);
    }
    
    const submitHandler = (event) =>{
        event.preventDefault();
        login(inputValue);    
        props.onLogin();
        setInputValue({email :"", password :""})
        console.log(props.isLoggedIn)
        // if(props.isLoggedIn)
            history.push('/AvailableJobs')
    }

    return <Card style={{height: "430px"}}>
        <h2 className={styles["heading"]}>Login</h2>
        <form autoComplete="off" onSubmit={submitHandler}>
                <InputField 
                placeholder="Enter Your Email"
                name="email"
                type="email"
                value={inputValue.email}
                label="Email Address"
                onChange={ChangeHandler}
                onBlur={blurHandler}
                isValid={isValid}
            />
            <Link style={{textDecoration:"none"}} to="/ForgotPassword"><p className={styles["forgot-password"]}>Forgot your password?</p></Link>
            <InputField 
                placeholder="Enter Your Password"
                name="password"
                type="password"
                value={inputValue.password}
                label="Password"
                onChange={ChangeHandler}
                onBlur={blurHandler}
                isValid={isValid}
            />
            {!isValid  && <p className={styles["failure-message"]}>Incorrect email address or password.</p>}
            <button type="submit" disabled={!isValid} className={styles["login-btn"]}>Login</button>
        </form>
        <div className={styles["create-acc-txt"]}>
            <span>New to MyJobs? </span>
            <Link style={{textDecoration:"none"}} to="/Signup"><span className="blue-txt">Create an account</span></Link>
        </div>
    </Card>
}

export default Login;
