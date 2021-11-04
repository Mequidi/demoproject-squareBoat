import Card from '../UI Component/Card'
import InputField from '../UI Component/InputField'
import { useState } from 'react';

const PostJob = () =>{

    const [inputValue, setInputValue] = useState({jobTitle :"", description :"", location:""});

    const changeHandler = (event) =>{
        const { name,value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name] : value,
          })); 
    }
    const submitHandler = (event) =>{
        event.preventDefault();

    }

    return <Card>
        <h2>Post a Job</h2>
        <form onSubmit={submitHandler}>
            <InputField 
                placeholder="Enter job title"
                name="jobTitle"
                type="text"
                value={inputValue.jobTitle}
                label="Job title*"
                onChange={changeHandler}
            />
            <InputField 
                    placeholder="Enter job description"
                    name="description"
                    type="textArea"
                    value={inputValue.description}
                    label="Description*"
                    onChange={changeHandler}
            />
            <InputField 
                    placeholder="Enter location"
                    name="location"
                    type="text"
                    value={inputValue.location}
                    label="Location*"
                    onChange={changeHandler}
            />
        </form>
        
    </Card>
}

export default PostJob