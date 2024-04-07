import Link from "next/link";
import styles from "./index.module.css";

const page = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.heroimg} ${styles.top}`}></div>
            <div className={`${styles.heroimg} ${styles.left}`}></div>    
            <div className={`${styles.heroimg} ${styles.right}`}></div>  
            <div className={`${styles.heroimg} ${styles.down}`}></div>    
            <div className={styles.innercontainer}>
                <div className={styles.imgcontainer}><img src="/logo.png" alt="" /></div>
                <div className={styles.heading}>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
                <Link href='' className={`${styles.btn} btngradient`}>Get in Touch</Link>
            </div>
        </div>
    );
}

export default page;