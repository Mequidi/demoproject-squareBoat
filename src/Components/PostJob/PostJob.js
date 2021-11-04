import Card from '../UI Component/Card'
import styles from './PostJob.module.css'
import InputField from '../UI Component/InputField'
import { useState } from 'react';
import { createJob } from '../../Utilites/Api';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PostJob = () =>{

    const [inputValue, setInputValue] = useState({jobTitle :"", description :"", location:""});
    const history = useHistory()
    const changeHandler = (event) =>{
        const { name,value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name] : value,
          })); 
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        createJob({title:inputValue.jobTitle,description:inputValue.description,location:inputValue.location,token:localStorage.getItem("jwt")});
        setInputValue({jobTitle :"", description :"", location:""})
        history.push("/AvailableJobs")
    }

    return <>
            <p className={styles["navigation"]}>  
                <Link style={{textDecoration:"none",color:"white"}} to="/AvailableJobs"><span> Home </span></Link>
                {window.location.pathname==="/PostJobs" &&  <Link style={{textDecoration:"none",color:"white"}} to="/PostJobs">{" > "}<span> Post a job </span></Link>}
            </p>
            <Card>
                <h2>Post a Job</h2>
                <form autoComplete="off" onSubmit={submitHandler}>
                    <InputField 
                        placeholder="Enter job title"
                        name="jobTitle"
                        type="text"
                        value={inputValue.jobTitle}
                        label="Job title*"
                        onChange={changeHandler}
                    />
                    <div className={styles["input"]}>
                        <label>{"Description*"}</label>
                        <br/>
                        <textarea 
                            placeholder="Enter job description" 
                            name="description" 
                            value={inputValue.description}
                            className={styles["input-field"]}
                            onChange={changeHandler}/>
                    </div>
                    <InputField 
                            placeholder="Enter location"
                            name="location"
                            type="text"
                            value={inputValue.location}
                            label="Location*"
                            onChange={changeHandler}
                    />
                    <button className={styles["post-btn"]}>Post</button>
                    </form>
                </Card>   
            </>

}

export default PostJob