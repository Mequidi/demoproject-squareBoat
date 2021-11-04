import { useState } from "react/cjs/react.development"
import styles from "./ForgotPassword.module.css"
import Card from "../UI Component/Card"
import InputField from "../UI Component/InputField"
// import { Link } from "react-router-dom"
import { getToken } from "../../Utilites/Api"
import { useHistory } from "react-router"

const ForgotPassword = ()=>{
    
    const history = useHistory();
    const [inputValue, setInputValue ] = useState("")
    const email = inputValue;
    const emailChangeHandler = (event) =>{
        setInputValue(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        getToken(inputValue);
        setInputValue("")
        history.push("/ResetPassword");
    }

    return <Card>
        <h2 className={styles.heading}>Forgot your password?</h2>
        <p className={styles["password-instructions"]}>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
        <form autoComplete="off" onSubmit={submitHandler}>
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