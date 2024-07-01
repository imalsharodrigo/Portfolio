import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../util'



const Contact = () => {
  return (
    <footer className={styles.container} id="Contact">
        <div className={styles.title}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} className={styles.image}/>
                <a href='mailto:imalsharodrigo852@gmail.com'>imalshanethmi852@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} className={styles.image} />
                <a href='https://lk.linkedin.com/in/imalsha-rodrigo-9159331b3'>Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} className={styles.image} />
                <a href='https://github.com/imalsharodrigo'>Github</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact