import styles from "./InputField.module.css"

const InputField = (props) =>{

    let inputClasses = `${styles["input-field"]}`;
    if(!props.isValid){
        inputClasses= `${styles["input-field"]} ${styles[".failure-input"]}`
    }

    return <div className={styles["input"]} style={props.style}>
        <label>{props.label}</label>
        <br/>
        <input 
            placeholder={props.placeholder} 
            name={props.name} 
            type={props.type} 
            value={props.value}
            className={inputClasses}
            onChange={props.onChange}
            onBlur={props.onBlur}/>
    </div>
}

export default InputField;