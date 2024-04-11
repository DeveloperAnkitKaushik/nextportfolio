import styles from "./index.module.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const page = () => {
    return (
        <div className={styles.container}>
            <div className="maincontainer">
                <div className={styles.innercontainer}>
                    <div className={styles.img}></div>
                    <div className={styles.heading}>Don't Be shy, Hit me up! 👇</div>
                    <div className={styles.social}>
                        <a href='https://www.linkedin.com/in/ankitkaushik/' target="_blank" className={styles.socialcontainer}><FaLinkedinIn className={styles.icon} style={{ color: `#0c61bf` }} /> <span>Linkdin</span></a>
                        <a href='mailto:DeveloperAnkitKaushik@gmail.com' target="_blank" className={styles.socialcontainer}><MdMarkEmailRead className={styles.icon} style={{ color: `#3cb371` }} /> <span>DeveloperAnkitKaushik@gmail.com</span></a>
                        <a href='https://github.com/DeveloperAnkitKaushik' target="_blank" className={styles.socialcontainer}><FaGithubAlt className={styles.icon} style={{ color: `black` }} /><span>Github</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;