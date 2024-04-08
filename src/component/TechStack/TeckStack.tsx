import { techarr } from "@/helper/Tech";
import styles from "./index.module.css";

const page = () => {
    return(
        <div className={styles.container}>
            <div className="maincontainer transcontainer">
                <div className={styles.innercontainer}>
                    <div className={styles.heading}>Tech Stack</div>
                    <div className={styles.techcontainer}>
                        <div className={styles.techcontent}>
                            {techarr.map((tech:any,ind:number) => (
                                <div className={styles.tech} style={{backgroundImage: `url(${tech})`}} key={ind}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;