import React from 'react'
import { getImageUrl } from '../util'

import styles from './Cont.module.css'

export const Cont = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Imalsha</h1>
        <p className={styles.description}>I'm Ui/Ux designer and Frontend developer.</p>
        <a  className={styles.contactBtn} href='mailto:imalsharodrigo852@gmail.com'>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} className={styles.profileImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
}
