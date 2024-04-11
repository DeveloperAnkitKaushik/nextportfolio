"use client";

import { techarr } from "@/helper/Tech";
import styles from "./index.module.css";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const page = () => {

    return (
        <div className={styles.container}>
            <div className={styles.imgdown}></div>
            <div className="maincontainer transcontainer">
                <div className={styles.innercontainer}>
                    <div className={styles.heading}>Tech Stack & Projects <div className={styles.headingicon}></div></div>
                    <div className={styles.techcontainer}>
                        <div className={styles.techcontent}>
                            {techarr.map((tech: any, ind: number) => (
                                <div className={styles.tech} style={{ backgroundImage: `url(${tech})` }} key={ind}></div>
                            ))}
                        </div>
                    </div>
                </div>
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default page;