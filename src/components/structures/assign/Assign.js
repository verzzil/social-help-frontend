import styles from "./assign.module.scss";

const Assign = () => {
    return(
        <form>
            <div className={styles.input__container} >
                <input className={styles.input} type="text" placeholder="Enter time" />
            </div>
            <div className={styles.input__container}>
                <input className={styles.input} type="date" placeholder="Enter date" />
            </div>
            <button>Confirm</button>
        </form>
    )
}

export default Assign;