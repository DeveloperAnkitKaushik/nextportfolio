import styles from "./page.module.css";
import Hero from "../component/Hero/Hero";

const Home = () => {
    return(
        <div className={styles.container}>
            <Hero/>
        </div>
    );
}

export default Home;