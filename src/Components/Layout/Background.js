// import { useState,useEffect } from "react";

const Background = ({currentURL}) =>{

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