import Card from "../UI Component/Card"
import styles from "./Signup.module.css"
import InputField from "../UI Component/InputField"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { register } from "../../Utilites/Api"
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MdPersonSearch } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'

const Signup = () =>{
    const history = useHistory()
    const [ isCandidate,setIsCandidate] = useState(false)

    const submitHandler = (values)=>{
        const finalData = {...values,userRole:isCandidate?1:0}
        console.log(finalData)
        register(finalData);
        history.push('/Login')
    }
    const Schema = Yup.object().shape({
        email: Yup.string()        
            .email('Invalid email address.')
            .required("The field is mandatory.").nullable(),
        password: Yup.string()
            .required("The field is mandatory."),  
        name : Yup.string()
            .required("The field is mandatory."), 
        confirmPassword : Yup.string()
            .required("The field is mandatory."), 
        skills: isCandidate && Yup.string()
            .required("The field is mandatory."), 
    });
    
    let recruiterStyle = `${styles["type-btn"]} ${isCandidate?"":styles.active}`;
    let candidateStyle = `${styles["type-btn"]} ${!isCandidate?"":styles.active}`;

    return <Card>
        <h2 className={styles["heading"]}>Signup</h2>
        <div className={styles["btn-container"]}>
            <p className={styles.label}>I’m a*</p>
            <button onClick={()=>{
                setIsCandidate(false)
            }}className={recruiterStyle}> <MdPersonSearch className={styles.icon}/><span>Recruiter</span></button>
            <button onClick={()=>{
                setIsCandidate(true)
            }} className={candidateStyle}><HiUserGroup className={styles.icon}/><span>Candidate</span></button>
        </div>
        <Formik 
						initialValues={{
							email: "",
							name: "", 
                            password:"",
                            confirmPassword:"",
                            skills:""
						}}
						validationSchema={Schema}
						onSubmit={(values)=>submitHandler(values)}
					>
					{({ values, errors, touched, handleChange, handleBlur }) => (
                        <Form>
                        <InputField 
                                placeholder="Enter Your Full Name"
                                name="name"
                                type="text"
                                value={values.name}
                                label="Full Name*"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors.name}
                                touched={touched.name}
                                
                            />
                           <InputField 
                                placeholder="Enter Your Email"
                                name="email"
                                type="email"
                                value={values.email}
                                label="Email Address*"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors.email}
                                touched={touched.email}
                            />
                            <div className={styles["half-input"]}>
                                <InputField 
                                    placeholder="Enter Your password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    label="Create Password*"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errors={errors.password}
                                    touched={touched.password}
                                    isHalfInput={true}
                                />
                                <div style={{width:"1rem",flexGrow:"0"}}></div>
                                <InputField 
                                    placeholder="Enter Your Password"
                                    name="confirmPassword"
                                    type="password"
                                    value={values.confirmPassword}
                                    label="Confirm Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errors={errors.confirmPassword}
                                    touched={touched.confirmPassword}
                                    isHalfInput={true}
                                />
                            </div>
                             <InputField
                                style={{marginTop:"0"}} 
                                placeholder="Enter comma separated skills"
                                name="skills"
                                type="text"
                                value={values.skills}
                                label="Skills"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errors={errors.skills}
                                touched={touched.skills}
                            />
                            <button type="submit" className={styles["signup-btn"]}>Signup</button>
                        </Form>)}
                    </Formik>
        
        <div className={styles["login-txt"]}>
            <span>Have an account? </span>
            <Link style={{textDecoration:"none"}} to="/Login"><span className="blue-txt">Login </span></Link>
        </div>
    </Card>
}
export default Signup;