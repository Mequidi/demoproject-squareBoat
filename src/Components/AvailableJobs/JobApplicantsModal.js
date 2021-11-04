import Card from "../UI Component/Card"
import { useEffect, useState } from "react"; 
import styles from './JobApplicantsModal.module.css'
import { getJobCandidates } from "../../Utilites/Api";

const JobApplicantsModal = (props) =>{
     
    const [jobApplicants,setJobApplicants] = useState([
    // {id:1,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:2,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:3,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:4,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:5,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:6,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:7,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:8,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:9,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:10,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"},
    // {id:11,name:"lmoa",skills:["lmao1","lmao2","lmao3"],email:"nikhilsejwal@gmail.com"}
    ])
    useEffect(()=>{
        getJobCandidates({id:props.id,token:localStorage.getItem("jwt")})
        .then((result)=>{
            setJobApplicants(result)
        })
    },[props])

    return <div>
        <div className={styles["overlay"]}></div>
        <Card className={styles["job-applicant-card"]}>
        
        <div className={styles["heading-container"]}>
            <h2 className={styles["heading"]}>Applicants for this job</h2>
            <button className={styles["close-btn"]} onClick={props.onClick}>X</button>
        </div>
        <p className={styles["no-of-applicants"]}>Total {jobApplicants?.length} applications</p>
        <div className={styles["grey-background"]}>
            {jobApplicants?.length>0?
                <ul className={styles["applicants-list"]}>{jobApplicants.map(item=>{
                    return(<li>
                            <div className={styles["basic-info-container"]}>
                                <div className={styles.logo}><span>L</span></div>
                                <div className={styles.info}>
                                    <p className={styles.name}>{item.name}</p>
                                    <p className={styles.email}>{item.email}</p>
                                </div>
                            </div>
                            <div>
                                <p className={styles["skills-txt"]}>Skills</p>
                                <span className={styles.skill}>{item.skills}</span>
                            </div>
                    </li>)
                })}</ul>
                :
                <div className={styles["center-alignment-container"]}>
                    <div>
                        <i></i>
                        <h2>No applications available!</h2>
                    </div>
                </div>
            }
        </div>
    </Card>
    </div>
}

export default JobApplicantsModal;