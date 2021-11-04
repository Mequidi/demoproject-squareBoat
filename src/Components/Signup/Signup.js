import Card from "../UI Component/Card"
import styles from "./Signup.module.css"
import InputField from "../UI Component/InputField"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { register } from "../../Utilites/Api"

const INITAL_VALUE = {name:"",email:"",password:"",confirmPassword:"",skills:""}

const Signup = (props) =>{
    const history = useHistory()
    const [inputValue,setInputValue] = useState(INITAL_VALUE);
    const [ isCandidate,setIsCandidate] = useState(false)

    const submitHandler = (event)=>{
        event.preventDefault();
        const finalData = {...inputValue,userRole:isCandidate?1:0}
        register(finalData);
        props.onLogin();
        setInputValue(INITAL_VALUE);
        if(props.isLoggedIn)
            history.push('/AvailableJobs')
    }
    const nameChangeHandler = (event)=>{
        const { value } = event.target;
        setInputValue((prev) => ({
        ...prev,
        name: value,
        }));
    }
    const emailChangeHandler = (event)=>{
        const { value } = event.target;
        setInputValue((prev) => ({
        ...prev,
        email: value,
        }));
    }
    const passwordChangeHandler = (event)=>{
        const { value } = event.target;
        setInputValue((prev) => ({
        ...prev,
        password: value,
        }));
    }
    const confirmPasswordChangeHandler = (event)=>{
        const { value } = event.target;
        setInputValue((prev) => ({
        ...prev,
        confirmPassword: value,
        }));
    }
    const skillsChangeHandler = (event) =>{
        const { value } = event.target;
        setInputValue((prev) => ({
        ...prev,
        skills: value,
        }));
    }
    let recruiterStyle = `${styles["type-btn"]} ${isCandidate?"":styles.active}`;
    let candidateStyle = `${styles["type-btn"]} ${!isCandidate?"":styles.active}`;

    return <Card>
        <h2 className={styles["heading"]}>Signup</h2>
        <div className={styles["btn-container"]}>
            <p className={styles.label}>I’m a*</p>
            <button onClick={()=>{
                setIsCandidate(false)
            }}className={recruiterStyle}>Recruiter</button>
            <button onClick={()=>{
                setIsCandidate(true)
            }} className={candidateStyle}>Candidate</button>
        </div>
        <form onSubmit={submitHandler}>
        <InputField 
                placeholder="Enter Your Full Name"
                name="fullname"
                type="text"
                value={inputValue.name}
                label="Full Name*"
                onChange={nameChangeHandler}
            />
           <InputField 
                placeholder="Enter Your Email"
                name="emailAdd"
                type="email"
                value={inputValue.email}
                label="Email Address*"
                onChange={emailChangeHandler}
            />
            <div className={styles["half-input"]}>
                <InputField 
                placeholder="Enter Your password"
                name="password"
                type="password"
                value={inputValue.password}
                label="Create Password*"
                onChange={passwordChangeHandler}
            />
            <div style={{width:"1rem",flexGrow:"0"}}></div>
            <InputField 
                placeholder="Enter Your Password"
                name="password 2"
                type="password"
                value={inputValue.confirmPassword}
                label="Confirm Password"
                onChange={confirmPasswordChangeHandler}
            />
            </div>
            {isCandidate && <InputField
                style={{marginTop:"0"}} 
                placeholder="Enter comma separated skills"
                name="skills"
                type="text"
                value={inputValue.skills}
                label="Skills"
                onChange={skillsChangeHandler}
            />}
            <button type="submit" className={styles["signup-btn"]}>Signup</button>
        </form>
        <div className={styles["login-txt"]}>
            <span>Have an account? </span>
            <Link style={{textDecoration:"none"}} to="/Login"><span className="blue-txt">Login </span></Link>
        </div>
    </Card>
}
export default Signup;