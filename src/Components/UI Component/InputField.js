import styles from "./InputField.module.css"
import { Field } from "formik";

const InputField = (props) =>{

    let inputClasses = `${styles["input-field"]} ${props.errors && props.touched && props.errors ? styles.validationError : ""}`;

    return <div className={styles.input} style={props.style}>
        <label>{props.label}</label>
        <br/>
        {/* <input */}
        <Field
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            value={props.value}
            className={inputClasses}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
        <p className={styles["input-mandatory"]}>{props.errors && props.touched && props.errors}</p>
    </div>
}

export default InputField;