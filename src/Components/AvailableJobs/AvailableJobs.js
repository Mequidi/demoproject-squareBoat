import styles from "./AvailableJobs.module.css"
import { useState,useEffect } from "react";
import JobApplicantsModal from "./JobApplicantsModal";
import { getPostedJobs } from "../../Utilites/Api";
import { Link } from "react-router-dom"; 

const AvailableJobs = () =>{

    const [ selectedId,setSelectedId ] = useState("");
    const [ jobs,setJobs ] = useState([]);
    useEffect(()=>{
        getPostedJobs(localStorage.getItem("jwt"))
        .then((result)=>{
            console.log(result)
            setJobs(result);
        });
    },[]);
    const [ showModal,setShowModal ] = useState(false);
    const closeBtnClickHandler = () =>{
        setShowModal(false)
    }
    console.log(jobs)
    return <div className={styles.jobs}>
        {showModal && <JobApplicantsModal id={selectedId} onClick={closeBtnClickHandler}></JobApplicantsModal>}
        <p className={styles["navigation"]}>
            <Link style={{textDecoration:"none",color:"white"}} to="/AvailableJobs"><span> Home </span></Link>
            {window.location.pathname==="/PostJobs" &&  <Link style={{textDecoration:"none",color:"white"}} to="/PostJobs">{" > "}<span> Post a job </span></Link>}
        </p>
        <h2 className={styles["heading"]}>Jobs posted by you</h2>
        {jobs?<ul className={styles["job-list"]}>
            {jobs.map((item)=>{
                return <li key={item.id} className={styles["list-item"]}>
                    <h3>{item.title}</h3>
                    <p className={styles["list-description"]}>{item.description}</p>
                    <div className={styles["container"]}>
                        <div className={styles["location-container"]}>
                            <i></i>
                            <p>{item.location}</p>
                        </div>
                        <button onClick={() =>{
                            setShowModal(true);
                            setSelectedId(item.id)
                            console.log(item.id)
                        }}>View Applications</button>   
                    </div>
                </li>
            })}
        </ul>:
        <div className={styles["no-post"]}> 
            <div>
                <i className={styles.icon}>LOGO</i>
                <h2>Your posted jobs will show here!</h2>
                <Link style={{textDecoration:"none"}} to="/PostJobs"><button>Post a Job</button></Link>
            </div>  
        </div>}
        {/* pagination nav */}
        {<div></div>}
    </div>
}

export default AvailableJobs