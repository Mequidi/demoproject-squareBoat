import { changePassword } from "../../Utilites/Api"
import Card from "../UI Component/Card"
import InputField from "../UI Component/InputField"
import styles from "./ResetPassword.module.css"
import { useHistory } from "react-router-dom"
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ResetPassword = () =>{

    const history = useHistory();

    const Schema = Yup.object().shape({
        password: Yup.string()        
           .required("The field is mandatory."),
        confirmPassword: Yup.string()
         .required("The field is mandatory."),
    });

    const submitHandler = (values) =>{
        console.log(values)
        let finalData = {password:values.password,confirmPassword:values.confirmPassword,token:localStorage.getItem("jwt")}
        changePassword(finalData);
        console.log("reset password payload:",finalData)
        history.push("/Login")
    }

    return <Card>
        <h2>Reset Your Password</h2>
        <p className={styles["txt"]}>Enter your new password below.</p>
        <Formik 
			initialValues={{
				password: "",
                confirmPassword :""
			}}
			validationSchema={Schema}
			onSubmit={(values)=>submitHandler(values)}
		>
		{({ values, errors, touched, handleChange, handleBlur }) => (
			<Form>
            <InputField 
                placeholder="Enter Your Password"
                name="password"
                type="password"
                value={values.password}
                label="New password"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
            />
            <InputField 
                placeholder="Enter Your Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                label="Confirm new password"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
            />
            <button className={styles["submit-btn"]} type="submit">Reset</button>
        </Form>)}
        </Formik>
    </Card>
}

export default ResetPassword