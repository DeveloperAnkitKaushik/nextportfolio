import styles from "./index.module.css";
import { client } from "../../../sanity/lib/client";
import { projectsInterface } from "@/helper/projectTypes";

async function getProjects() {
    const query = `
        *[_type == "projects"] {
            title,
            shorttitle,
            "imageUrl": image.asset->url,
            link,
            code
        }
    `;

    const projects = await client.fetch(query, {}, { cache: "no-store" });
    return projects;
}

const page = async () => {
    const projects: any = await getProjects();
    return (
        <div className="maincontainer">
            <div className={styles.innercontainer}>
                <div className={styles.projectscontainer}>
                    {projects?.map((project: projectsInterface, ind: number) => (
                        <div className={styles.projectcontainer} key={ind}>
                            <div className={styles.dots}>
                                <div className={styles.dot} style={{ backgroundColor: `#F11D36` }}></div>
                                <div className={styles.dot} style={{ backgroundColor: `#FECB00` }}></div>
                                <div className={styles.dot} style={{ backgroundColor: `#01A44F` }}></div>
                            </div>
                            <div className={styles.img} style={{ backgroundImage: `url(${project.imageUrl})` }}></div>
                            <a href={project.link} target='_blank' className={styles.heading}>{project.title}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page;