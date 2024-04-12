'use client'

import { techarr } from "@/helper/Tech";
import styles from "./index.module.css";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { motion } from "framer-motion";

const Page = () => {


    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 200 }} animate={{ y: 100 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y: 0 }}
                className={styles.imgdown}
            ></motion.div>
            <div className="maincontainer transcontainer">
                <div className={styles.innercontainer}>
                    <div className={styles.heading}>Tech Stack & Projects <div className={styles.headingicon}></div></div>
                    <div className={styles.techcontainer}>
                        <div className={styles.techcontent}>
                            {techarr.map((tech, ind) => (
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

export default Page;
