'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { techarr } from "@/helper/Tech";
import styles from "./index.module.css";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const Page = () => {
    const controlsFooter = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const footerPosition = document.documentElement.scrollHeight - windowHeight * 1.1;

            if (scrollPosition >= footerPosition) {
                controlsFooter.start({ opacity: 1, y: 0});
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
                animate={controlsFooter}
                transition={{duration:0.5}}
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
