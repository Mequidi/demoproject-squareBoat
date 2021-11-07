import Card from "../UI Component/Card"
import { useEffect, useState } from "react"; 
import styles from './JobApplicantsModal.module.css'
import { getJobCandidates } from "../../Utilites/Api";
import { ImCross } from "react-icons/im"
import { CgFileDocument } from "react-icons/cg"

const JobApplicantsModal = (props) =>{
     
    const [jobApplicants,setJobApplicants] = useState([]);
    useEffect(()=>{
        getJobCandidates({id:props.id,token:localStorage.getItem("jwt")})
        .then((result)=>{
            setJobApplicants(result);
        })
    },[props])

    return <div>
        <div className={styles["overlay"]}></div>
        <Card className={styles["job-applicant-card"]}>
        
        <div className={styles["heading-container"]}>
            <h2 className={styles["heading"]}>Applicants for this job</h2>
            <button className={styles["close-btn"]} onClick={props.onClick}><ImCross style={{color:"#303F60"}}/></button>
        </div>
        <p className={styles["no-of-applicants"]}>Total {jobApplicants?.length} applications</p>
        <div className={styles["grey-background"]}>
            {jobApplicants?.length>0?
                <ul className={styles["applicants-list"]}>{jobApplicants.map(item=>{
                    return(<li key={item.id}>
                            <div className={styles["basic-info-container"]}>
                                <div className={styles.logo}><span>{item.name[0].toUpperCase()}</span></div>
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
                        <CgFileDocument style={{margin: "auto",fontSize: "6rem",marginBottom: "2rem"}}/>
                        <h2>No applications available!</h2>
                    </div>
                </div>
            }
        </div>
    </Card>
    </div>
}

export default JobApplicantsModal;