import styles from './App.module.css'
import { About } from './components/About'
import { Cont } from './components/Cont'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'


function App() {

  return (
    <div className={styles.App}>
        <Navbar></Navbar>
        <Cont></Cont>
        <About></About>
        <Projects></Projects>
        
        <Experience></Experience>
        <Contact></Contact>
    </div>
  )
}

export default App
