import styles from './InputWithError.module.scss'

const InputWithError = ({
    onChange,
    name,
    type,
    placeholder,
    errorMsg = '',
}) => {
    return (
        <div className={styles.InputWithError}>
            <input
                className={styles.InputWithError__input}
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
            />
            <span className={styles.InputWithError__msg}>{errorMsg}</span>
        </div>
    )
}

export default InputWithError
