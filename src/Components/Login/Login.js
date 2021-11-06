import Card from "../UI Component/Card";
import InputField from "../UI Component/InputField";
import styles from "./Login.module.css"
import { Link,useHistory } from "react-router-dom";
import { login } from "../../Utilites/Api";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Login = (props) =>{
    const history = useHistory();
    
    const Schema = Yup.object().shape({
        email: Yup.string()        
           .email('Invalid email address.')
           .required("The field is mandatory.").nullable(),
        password: Yup.string()
         .required("The field is mandatory."),
    });
    
    const submitHandler = (values) =>{
        login(values,()=>{
            history.push('/AvailableJobs')
            props.onLogin();
        }); 
    }

    return <Card style={{height: "430px"}}>
        <h2 className={styles["heading"]}>Login</h2>
        <Formik 
						initialValues={{
							email: "",
							password: "",
						}}
						validationSchema={Schema}
						onSubmit={(values)=>submitHandler(values)}
					>
					{({ values, errors, touched, handleChange, handleBlur }) => (
						<Form>
                            <InputField 
                                placeholder="Enter Your Email"
                                name="email"
                                type="email"
                                value={values.email}
                                label="Email Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <Link style={{textDecoration:"none"}} to="/ForgotPassword"><p className={styles["forgot-password"]}>Forgot your password?</p></Link>
                            <InputField 
                                placeholder="Enter Your Password"
                                name="password"
                                type="password"
                                value={values.password}
                                label="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors.password}
                                touched={touched.password}
                            />
                            <button type="submit" className={styles["login-btn"]}>Login</button>
                        </Form>)}
        </Formik>
        <div className={styles["create-acc-txt"]}>
            <span>New to MyJobs? </span>
            <Link style={{textDecoration:"none"}} to="/Signup"><span className="blue-txt">Create an account</span></Link>
        </div>
    </Card>
}

export default Login;
