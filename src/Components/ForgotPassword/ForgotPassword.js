import styles from "./ForgotPassword.module.css"
import Card from "../UI Component/Card"
import InputField from "../UI Component/InputField"
// import { Link } from "react-router-dom"
import { getToken } from "../../Utilites/Api"
import { useHistory } from "react-router"
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ForgotPassword = ()=>{
    
    const history = useHistory();
    const Schema = Yup.object().shape({
        email: Yup.string()        
           .email('Invalid email address.')
           .required("The field is mandatory.").nullable()
    });
    const submitHandler = (values) =>{
        getToken(values.email,()=>{
            history.push("/ResetPassword");
        });
        
    }

    return <Card>
        <h2 className={styles.heading}>Forgot your password?</h2>
        <p className={styles["password-instructions"]}>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
        <Formik 
			initialValues={{
				email: ""
			}}
			validationSchema={Schema}
			onSubmit={(values)=>submitHandler(values)}
		>
		{({ values, errors, touched, handleChange, handleBlur }) => (
						<Form>
        <InputField 
                placeholder="Enter your email"
                name="email"
                type="email"
                value={values.email}
                label="Email Address"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
            />
            <button type="submit" className={styles["submit-btn"]}>Submit</button>
        </Form>)}
        </Formik>
    </Card>
}

export default ForgotPassword