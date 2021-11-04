import { useState,useEffect } from "react";

const Background = () =>{

    const [ currentURL, setCurrentURL ] = useState("");
    useEffect(()=>{
        if(currentURL!==window.location.pathname)
            setCurrentURL(window.location.pathname)
    },[currentURL])
    
    let bgCoverClass="";
    switch (currentURL) {
        case "/":
            bgCoverClass="bg-large";
            break;
        
        case "/Login":
        case "/ForgotPassword":
        case "/ResetPassword":
        case "/Signup":
            bgCoverClass="bg-medium";
            break;
        case "/AvailableJobs":
            bgCoverClass="bg-small";
            break;
        default:
            break;
    }
    console.log(bgCoverClass)

    return <div className={`background-overlay ${bgCoverClass}`}></div>
}

export default Background;