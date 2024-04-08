"use client"

import Link from "next/link";
import styles from "./index.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Page = () => {
    const speed = 0.5;
    const controlsTop = useAnimation();
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const controlsDown = useAnimation();

    useEffect(() => {
        controlsTop.start({ opacity: 1, y: 0 });
        controlsLeft.start({ opacity: 1, x: 0 });
        controlsRight.start({ opacity: 1, x: 0 });
        controlsDown.start({ opacity: 1, y: 0 });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const triggerPosition = windowHeight * 0.2;

            if (scrollPosition < triggerPosition) {
                controlsTop.start({ opacity: 1, y: 0 });
                controlsLeft.start({ opacity: 1, x: 0 });
                controlsRight.start({ opacity: 1, x: 0 });
                controlsDown.start({ opacity: 1, y: 0 });
            } else {
                controlsTop.start({ opacity: 0, y: -200 });
                controlsLeft.start({ opacity: 0, x: -200 });
                controlsRight.start({ opacity: 0, x: 200 });
                controlsDown.start({ opacity: 0, y: 200 });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [controlsTop, controlsLeft, controlsRight, controlsDown]);

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={controlsTop}
                transition={{ duration: speed }}
                className={`${styles.heroimg} ${styles.top}`}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={controlsLeft}
                transition={{ duration: speed }}
                className={`${styles.heroimg} ${styles.left}`}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={controlsRight}
                transition={{ duration: speed }}
                className={`${styles.heroimg} ${styles.right}`}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={controlsDown}
                transition={{ duration: speed }}
                className={`${styles.heroimg} ${styles.down}`}
            ></motion.div>
            <div className={styles.innercontainer}>
                <div className={styles.imgcontainer}>
                    <img src="/logo.png" alt="" />
                </div>
                <div className={styles.heading}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </div>
                <Link href="" className={`${styles.btn} btngradient`}>
                    Get in Touch
                </Link>
            </div>
        </div>
    );
};

export default Page;
