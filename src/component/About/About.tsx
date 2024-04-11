import Link from "next/link";
import styles from "./index.module.css";

const page = () => {
    return (
        <div className={styles.container}>
            <div className="maincontainer">
                <div className={`${styles.innercontainer}`}>
                    <div className={styles.content}>
                        <div className={`${styles.page1} ${styles.page}`}></div>
                        <div className={`${styles.page2} ${styles.page}`}></div>
                        <div className={`${styles.page3} ${styles.page}`}></div>
                        <div className={styles.myimg}></div>
                        <div className={styles.actualcontent}>
                            <div className={styles.heading}>Full Stack Web and App Developer & Problem Solver </div>
                            <div className={styles.para}>Master's student at GGSIPU, passionate web developer, skilled problem solver. Dedicated to crafting innovative digital solutions with precision and creativity.</div>
                            <a href='https://www.linkedin.com/in/ankitkaushik/' target="_blank" className={styles.btn}>
                                <div className={styles.btngif}></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;