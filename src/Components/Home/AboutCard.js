import styles from "./About.module.css"

const AboutCard = (props) =>{
    return <li className={styles["list-item"]}>
        <h2>
            <p>{props.title}</p>
            <p>{props.secondaryTitle}</p>
        </h2>
        <p className={styles.description}>{props.description}</p> 
    </li>
}

export default AboutCard;