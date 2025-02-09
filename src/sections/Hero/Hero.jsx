import styles from './HeroStyles.module.css'
import heroImg from '../../assets/me.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkdinLight from '../../assets/linkedin-light.svg'
import linkdinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../assets/common/ThemeContext'

function Hero() {

  const {theme , toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark;

  return (
    <section id='hero' className={styles.container} >
      <div className={styles.colorModeContainer} data-aos="fade-left">
        <img className={styles.hero} src={heroImg} alt="my picture" />
        <img className={styles.colorMode} src={themeIcon} alt="dark"  onClick={toggleTheme}/>
      </div>

      <div className={styles.info} data-aos="fade-right">
      {/* <div className={styles.info} data-aos="fade-right"> */}
        <h1>Ayoub <br/> Aharmouch </h1>
        <h2> Fullstack Developer </h2>
        <span>
          {/* <a href="https://twitter.com" target="_blank"></a>
          <img src={twitterIcon} alt="twitter" /> */}
          <a href="https://github.com/AyoubAharmouch" target="_blank"></a>
          <img src={githubIcon} alt="github" />
          <a href="https://www.linkedin.com/in/ayoub-aharmouch-1ba391216/" target="_blank"></a>
          <img src={linkdinIcon} alt="" />
        </span>
        <p className={styles.description}>I am passionate about continuous learning and exploring innovative solutions. My curiosity drives me to research, discover, and implement new ideas, whether in technology, design, or problem-solving. I thrive on staying up-to-date with industry trends and leveraging my knowledge to create impactful and efficient solutions.</p>
        <a href={cv}  target='_blank' >
          
          <button className={styles.hover}  > Resume</button>
        </a>

        
        <div>
</div>
      </div>
    </section>
  )
}

export default Hero
