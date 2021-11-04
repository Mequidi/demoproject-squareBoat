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
        // props.onLogin();
        setInputValue(INITAL_VALUE);
        history.push('/Login')
    }
    const changeHandler = (event)=>{
        const { name,value } = event.target;
        setInputValue((prev) => ({
        ...prev,
        [name]: value,
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
        <form autoComplete="off" onSubmit={submitHandler}>
        <InputField 
                placeholder="Enter Your Full Name"
                name="name"
                type="text"
                value={inputValue.name}
                label="Full Name*"
                onChange={changeHandler}
            />
           <InputField 
                placeholder="Enter Your Email"
                name="email"
                type="email"
                value={inputValue.email}
                label="Email Address*"
                onChange={changeHandler}
            />
            <div className={styles["half-input"]}>
                <InputField 
                placeholder="Enter Your password"
                name="password"
                type="password"
                value={inputValue.password}
                label="Create Password*"
                onChange={changeHandler}
            />
            <div style={{width:"1rem",flexGrow:"0"}}></div>
            <InputField 
                placeholder="Enter Your Password"
                name="confirmPassword"
                type="password"
                value={inputValue.confirmPassword}
                label="Confirm Password"
                onChange={changeHandler}
            />
            </div>
            {isCandidate && <InputField
                style={{marginTop:"0"}} 
                placeholder="Enter comma separated skills"
                name="skills"
                type="text"
                value={inputValue.skills}
                label="Skills"
                onChange={changeHandler}
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