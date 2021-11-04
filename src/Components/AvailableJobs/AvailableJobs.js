import styles from "./AvailableJobs.module.css"
import { useState,useEffect } from "react";
import JobApplicantsModal from "./JobApplicantsModal";
import { getPostedJobs } from "../../Utilites/Api";

const AvailableJobs = () =>{

    const [ selectedId,setSelectedId ] = useState("");
    const [ jobs,setJobs ] = useState([]);
    useEffect(()=>{
        getPostedJobs(localStorage.getItem("jwt"))
        .then((result)=>{
            setJobs(result);
        });
    },[]);
    const [ showModal,setShowModal ] = useState(false);
    const closeBtnClickHandler = () =>{
        setShowModal(false)
    }
    return <div className={styles.jobs}>
        {showModal && <JobApplicantsModal id={selectedId} onClick={closeBtnClickHandler}></JobApplicantsModal>}
        <p className={styles["navigation"]}>Home</p>
        <h2 className={styles["heading"]}>Jobs posted by you</h2>
        {jobs.length>0?<ul className={styles["job-list"]}>
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
                <button>Post a Job</button>
            </div>  
        </div>}
        {/* pagination nav */}
        {<div></div>}
    </div>
}

export default AvailableJobs