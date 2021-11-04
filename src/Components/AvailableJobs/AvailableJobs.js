import styles from "./AvailableJobs.module.css"

const AvailableJobs = () =>{

    const jobs = [
        {id:1,title:"UI UX Designer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",location:"Bengaluru"},
        {id:2,title:"UI UX Designer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",location:"Bengaluru"},
        {id:3,title:"UI UX Designer",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",location:"Bengaluru"}
    ];
    // const jobs = 0; 

    return <div className={styles.jobs}>
        
        <p className={styles["navigation"]}>Home</p>
        <h2 className={styles["heading"]}>Jobs posted by you</h2>
        {jobs?<ul className={styles["job-list"]}>
            {jobs.map((item)=>{
                return <li className={styles["list-item"]}>
                    <h3>{item.title}</h3>
                    <p className={styles["list-description"]}>{item.description}</p>
                    <div className={styles["container"]}>
                        <div className={styles["location-container"]}>
                            <i></i>
                            <p>{item.location}</p>
                        </div>
                        <button>View Applications</button>   
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