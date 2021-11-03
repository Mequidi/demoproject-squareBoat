import { useState } from "react/cjs/react.development"
import styles from "./ForgotPassword.module.css"
import Card from "../UI Component/Card"
import InputField from "../UI Component/InputField"

const ForgotPassword = ()=>{
    
    const [inputValue, setInputValue ] = useState("")
    const email = inputValue
    const emailChangeHandler = (event) =>{
        setInputValue(email)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(email)
    }

    return <Card>
        <h2 className={styles.heading}>Forgot your password?</h2>
        <p className={styles["password-instructions"]}>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
        <form onSubmit={submitHandler}>
        <InputField 
                placeholder="Enter your email"
                name="reset password"
                type="email"
                value={email}
                label="Email Address"
                onChange={emailChangeHandler}
            />
            <button type="submit" className={styles["submit-btn"]}>Submit</button>
        </form>
    </Card>
}

export default ForgotPassword