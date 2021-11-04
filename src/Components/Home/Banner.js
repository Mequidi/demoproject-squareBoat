import styles from "./Banner.module.css"
import bannerImg from "../../Assets/Images/banner-img.jpeg"
import { Link } from "react-router-dom"

const Banner = () => {
    return <div className={styles.banner}>
        <div className={styles["banner-content-container"]}>
            <h1 className={styles["banner-heading"]}>Welcome to <span>My<span className="blue-txt">Jobs</span></span></h1>
            <Link style={{textDecoration:"none"}} to="/Signup"><button className={styles["banner-btn"]}>Get Started</button></Link>
        </div>
        <div className={styles["banner-img-container"]}>
            <img src={bannerImg} alt=""/>
        </div>
    </div>
}

export default Banner;