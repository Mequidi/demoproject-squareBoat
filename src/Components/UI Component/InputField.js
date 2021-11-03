import styles from "./InputField.module.css"

const InputField = (props) =>{

    const inputClasses = `${styles["input-field"]}`;

    return <div className={styles["input"]} style={props.style}>
        <label>{props.label}</label>
        <br/>
        <input 
            placeholder={props.placeholder} 
            name={props.name} 
            type={props.type} 
            value={props.value}
            className={inputClasses}
            onChange={props.onChange}/>
    </div>
}

export default InputField;