'use client';

import styles from "./index.module.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

const page = () => {
    const controlsFooter = useAnimation();
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const footerPosition = document.documentElement.scrollHeight - windowHeight * 1.1;

            if (scrollPosition >= footerPosition) {
                controlsFooter.start({ opacity: 1, y: 0 });
            } else {
                controlsFooter.start({ opacity: 0, y: 100 });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [controlsFooter]);
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.imgdown}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                animate={controlsFooter}
            ></motion.div>
            <div className="maincontainer">
                <div className={styles.innercontainer} id="contact">
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