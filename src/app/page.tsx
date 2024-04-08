import styles from "./page.module.css";
import Hero from "../component/Hero/Hero";
import Slider from "../component/Slider/Slider";
import About from "../component/About/About";
import TechStack from "../component/TechStack/TeckStack";

const Home = () => {
   
    return(
        <div className={styles.container}>
            <Hero/>
            <About/>
            <TechStack/>
        </div>
    );
}

export default Home;