import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../util'



export const About = () => {
  return (
    <section className={styles.container} id="About">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>I am a UI (User Interface) Designer specializing in creating visually 
                            appealing and user-friendly designs. Using tools like Figma. 
                            My design process involves understanding user needs, wireframing, prototyping and functional UI designs.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>As a Frontend Developer, I focus on translating UI designs into interactive and responsive 
                            web applications. I use technologies like HTML, CSS, JavaScript, and React to build and 
                            maintain the user-facing aspects of websites. My role involves creating a smooth user experience.</p>

                        
                    </div>
                </li>
               
            </ul>
        </div>  
    </section>
  );
};
