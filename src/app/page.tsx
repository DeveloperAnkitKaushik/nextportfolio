import styles from "./page.module.css";
import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import TechStackAndPortfolio from "../component/TechStackAndPortfolio/TechStackAndPortfolio";
import Portfolio from "../component/Portfolio/Portfolio";
import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";

const Home = () => {
   
    return(
        <div className={styles.container}>
            <Hero/>
            <About/>
            <TechStackAndPortfolio/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default Home;