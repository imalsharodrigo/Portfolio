import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../util';

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);


  return (
    <nav className={styles.navbar}>
        <a href={''} className={styles.title} >Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
           src={
            menuOpen
            ? getImageUrl("nav/closeIcon.png")
            : getImageUrl("nav/menuIcon.png")
            }
            onClick={()=>setMenuOpen(!menuOpen)}
            
            />
          
            <ui className ={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}>
                <li><a href={'#About'}>About</a></li>
                <li><a href={'#projects'}>Projects</a></li>
                <li><a href={'#experience'}>Experience</a></li>
                <li><a href={'#Contact'}>Contact</a></li>
            </ui>
        </div>
    </nav>
  )
}

export default Navbar