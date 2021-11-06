import Card from '../UI Component/Card'
import styles from './PostJob.module.css'
import InputField from '../UI Component/InputField'
import { useState } from 'react';
import { createJob } from '../../Utilites/Api';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from "formik";
import * as Yup from "yup";

const PostJob = () =>{

    const history = useHistory();

    const Schema = Yup.object().shape({
        title: Yup.string()        
           .required("The field is mandatory."),
        description: Yup.string()
         .required("The field is mandatory."),
        location: Yup.string()
         .required("The field is mandatory."),
    });
    
    const submitHandler = (values) =>{
        createJob({title:values.jobTitle,description:values.description,location:values.location,token:localStorage.getItem("jwt")});
        history.push("/AvailableJobs");
    }

    return <>
            <p className={styles["navigation"]}>  
                <Link style={{textDecoration:"none",color:"white"}} to="/AvailableJobs"><span> Home </span></Link>
                {window.location.pathname==="/PostJobs" &&  <Link style={{textDecoration:"none",color:"white"}} to="/PostJobs">{" > "}<span> Post a job </span></Link>}
            </p>
            <Card>
                <h2>Post a Job</h2>
                <Formik 
						initialValues={{
                            title :"", 
                            description :"", 
                            location:""}}
						validationSchema={Schema}
						onSubmit={(values)=>submitHandler(values)}
					>
					{({ values, errors, touched, handleChange, handleBlur }) => (
						<Form>
                    <InputField 
                        placeholder="Enter job title"
                        name="jobTitle"
                        type="text"
                        value={values.title}
                        label="Job title*"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.email}
                        touched={touched.email}
                    />
                    <div className={styles["input"]}>
                        <label>{"Description*"}</label>
                        <br/>
                        <textarea 
                            placeholder="Enter job description" 
                            name="description" 
                            value={values.description}
                            className={`${styles["input-field"]} ${(errors.description && touched.description) && errors.description? styles.validationError : ""}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />   
                            <p className={styles["input-mandatory"]}>{(errors.description && touched.description) && errors.description}</p>
                    </div>
                    <InputField 
                            placeholder="Enter location"
                            name="location"
                            type="text"
                            value={values.location}
                            label="Location*"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors.email}
                            touched={touched.email}
                    />
                    <button className={styles["post-btn"]}>Post</button>
                    </Form>)}
                    </Formik>
                </Card>   
            </>

}

export default PostJob