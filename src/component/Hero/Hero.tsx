"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const page = () => {
    const speed = 0.5;
    
    return (
        <div className={styles.container}>
            <motion.div
                initial={{opacity: 0, y: -200 }} animate={{ y: -200 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y:0 }} className={`${styles.heroimg} ${styles.top}`}>
                    
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: -200 }} animate={{ x: -100 }} exit={{  }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, x:0 }} className={`${styles.heroimg} ${styles.left}`}>
                    
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 200 }} animate={{ x: 200 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, x:0 }} className={`${styles.heroimg} ${styles.right}`}>
                    
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 200 }} animate={{ y: 100 }} transition={{ duration: 0.5 }} whileInView={{ opacity: 1, y:0 }} className={`${styles.heroimg} ${styles.down}`}>
                    
            </motion.div>
            <div className={styles.innercontainer}>
                <div className={styles.imgcontainer}><img src="/logo.png" alt="" /></div>
                <div className={styles.heading}>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                <Link href='' className={`${styles.btn} btngradient`}>Get in Touch</Link>
            </div>
        </div>
    );
}

export default page;

