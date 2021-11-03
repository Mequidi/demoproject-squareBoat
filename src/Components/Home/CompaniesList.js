import styles from "./CompaniesList.module.css"
import budweiserLogo from "../../Assets/Images/HomelogoImages/budweiser-logo-removebg-preview.png"
import fedexLogo from "../../Assets/Images/HomelogoImages/fedex-removebg-preview.png"
import H_MLogo from "../../Assets/Images/HomelogoImages/H_M-removebg-preview.png"
import ibmLogo from "../../Assets/Images/HomelogoImages/ibm-logo-removebg-preview.png"
import mercedesBenzLogo from "../../Assets/Images/HomelogoImages/mercedes-benz-logo-removebg-preview.png"
import nikeLogo from "../../Assets/Images/HomelogoImages/nike-logo-removebg-preview.png"
import oracleLogo from "../../Assets/Images/HomelogoImages/oracle-logo-removebg-preview.png"
import redBullLogo from "../../Assets/Images/HomelogoImages/red_bull-removebg-preview.png"
import uniqloLogo from "../../Assets/Images/HomelogoImages/uniqlo-removebg-preview.png"
import waltDisneyLogo from "../../Assets/Images/HomelogoImages/walt-disney-logo-removebg-preview.png"

const CompaniesList = () =>{
    
    const logoImgUrls = [budweiserLogo,fedexLogo,H_MLogo,ibmLogo,mercedesBenzLogo,nikeLogo,oracleLogo,redBullLogo,uniqloLogo,waltDisneyLogo]
    
    return <div className={styles["company-list-container"]}>
        <h2>companies who trust us</h2>
        <ul className={styles["logo-list"]}>
            {logoImgUrls.map(item=><li className={styles["list-item"]}>
                <img src={item} alt=""/>
            </li>)}
        </ul>
    </div>
}

export default CompaniesList