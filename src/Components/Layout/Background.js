import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

const Background = () =>{

    const [ currentURL, setCurrentURL ] = useState(window.location.pathname);
    let location = useLocation();
    useEffect(() => {
        setCurrentURL(location.pathname);
    }, [location]);

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
        case "/PostJobs":
            bgCoverClass="bg-small";
            break;
        default:
            break;
    }
    return <div className={`background-overlay ${bgCoverClass}`}></div>
}

export default Background;