'use client';

import styles from "./index.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { imgarr } from "@/helper/SliderImages";

const Page = () => {
    return (
        <div className={styles.container}>
            <div className="maincontainer">
                <div className={styles.innercontainer}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className={styles.slider}
                    >
                        {imgarr.map((img, ind) => (
                            <SwiperSlide key={ind} style={{ backgroundImage: `url(${img})` }} className={styles.slidercontainer}></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Page;
