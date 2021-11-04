import { useState } from "react/cjs/react.development"
import { changePassword } from "../../Utilites/Api"
import Card from "../UI Component/Card"
import InputField from "../UI Component/InputField"
import styles from "./ResetPassword.module.css"
import { useHistory } from "react-router-dom"

const ResetPassword = () =>{

    const history = useHistory();
    const [inputValue, setInputValue ] = useState({newPassword:"",confirmNewPassword:""})

    const newPasswordChangeHandler = (event) =>{
        const {  value } = event.target;
        setInputValue((prev) => ({
          ...prev,
          newPassword: value,
        }));
    }

    const confirmNewPasswordChangeHandler = (event) =>{
        const {  value } = event.target;
        setInputValue((prev) => ({
          ...prev,
          confirmNewPassword: value,
        }));
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(inputValue)
        let finalData = {password:inputValue.newPassword,confirmPassword:inputValue.confirmNewPassword,token:localStorage.getItem("jwt")}
        changePassword(finalData);
        setInputValue({newPassword:"",confirmNewPassword:""})
        history.push("/Login")
    }

    return <Card>
        <h2>Reset Your Password</h2>
        <p className={styles["txt"]}>Enter your new password below.</p>
        <form autoComplete="off" onSubmit={submitHandler}> 
        <InputField 
            placeholder="Enter Your Password"
            name="newPassword"
            type="password"
            value={inputValue.newPassword}
            label="New password"
            onChange={newPasswordChangeHandler}
        />
        <InputField 
            placeholder="Enter Your Password"
            name="confirmNewPassword"
            type="password"
            value={inputValue.confirmNewPassword}
            label="Confirm new password"
            onChange={confirmNewPasswordChangeHandler}
        />
        <button className={styles["submit-btn"]} type="submit">Reset</button>
        </form>
    </Card>
}

export default ResetPassword