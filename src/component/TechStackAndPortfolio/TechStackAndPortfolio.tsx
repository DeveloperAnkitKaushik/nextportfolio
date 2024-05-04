import { techarr } from "@/helper/Tech";
import styles from "./index.module.css";

const Page = () => {

    return (
        <div className={styles.container}>

            <div className="maincontainer transcontainer">
                <div className={styles.innercontainer}>
                    <div className={styles.heading}>
                        <div className={styles.headingicon2}></div>
                        Tech Stack & Projects
                        <div className={styles.headingicon}></div></div>
                    <div className={styles.techcontainer}>
                        <div className={styles.techcontent}>
                            {techarr.map((tech, ind) => (
                                <div className={styles.tech} style={{ backgroundImage: `url(${tech})` }} key={ind}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
