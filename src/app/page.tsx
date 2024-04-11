import styles from "./page.module.css";
import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import TechStackAndPortfolio from "../component/TechStackAndPortfolio/TechStackAndPortfolio";

const Home = () => {
   
    return(
        <div className={styles.container}>
            <Hero/>
            <About/>
            <TechStackAndPortfolio/>
        </div>
    );
}

export default Home;