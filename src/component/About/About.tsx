import styles from "./index.module.css";

const page = () => {
    return (
        <div className={styles.container}>
            <div className="maincontainer">
                <div className={styles.innercontainer}>
                    <div className={styles.heading}>
                        <div className={styles.firstheading}>Ankit Kaushik</div>
                        <div className={styles.secondheading}>अंकित कौशिक</div>
                    </div>
                    <div className={styles.imgcontainer}>
                        <div className={styles.img}></div>
                        <div className={styles.overlay}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;