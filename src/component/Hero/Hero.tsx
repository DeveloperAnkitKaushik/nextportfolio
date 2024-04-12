'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./index.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Page = () => {
  const speed = 0.75;
  useGSAP(() => {
    gsap.from('#top', {
      y: -200,
      duration: speed,
      ease: 'back.out',
    })
    gsap.from('#left', {
      x: -200,
      duration: speed,
      ease: 'back.out',
    })
    gsap.from('#right', {
      x: 200,
      duration: speed,
      ease: 'back.out',
    })
    gsap.from('#down', {
      y: 200,
      duration: speed,
      ease: 'back.out',
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <div className={styles.imgcontainer}>
          <img src="/logo.png" alt="" />
        </div>
        <div className={styles.heading}>
          Designing code, shaping experiences, making ideas come alive.
        </div>
        <Link href="#contact" className={`${styles.btn} btngradient`}>
          Get in Touch
        </Link>
      </div>
      <div className={`${styles.heroimg} ${styles.top}`} id="top"></div>
      <div className={`${styles.heroimg} ${styles.left}`} id="left"></div>
      <div className={`${styles.heroimg} ${styles.right}`} id="right"></div>
      <div className={`${styles.heroimg} ${styles.down}`} id="down"></div>
    </div>
  );
};

export default Page;