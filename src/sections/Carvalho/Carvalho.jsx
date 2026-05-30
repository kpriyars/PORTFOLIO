import styles from './CarvalhoStyles.module.css';
import kpImg from '../../assets/kp.png'; 
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin light.png';
import linkedinDark from '../../assets/linkedin dark.png';
import githubLight from '../../assets/github light.png';
import githubDark from '../../assets/github dark.png';
import instagramLight from '../../assets/instagram light.png';
import instagramDark from '../../assets/instagram.png';
import resumePdf from '../../assets/resume.pdf'; 
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';
import { LanguageContext } from '../../common/LanguageContext';

function Carvalho() {
  const { theme, toggleTheme } = useTheme();
  const { texts } = useContext(LanguageContext);

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id='carvalho' className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img className={styles.carvalho} src={kpImg} alt="Profile Picture of Krishna Priya" />
        <div className={styles.iconWrapper}>
          <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
      </div>
    
      <div className={styles.info}>
        <h1>Krishna <br /> Priya</h1>
        <h2>{texts.header.role}</h2>
        <span>
          <a href="https://linkedin.com/in/kpriya28" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>

          <a href="https://github.com/kpriyars" target="_blank">
            {/* FIXED: Now correctly using githubIcon */}
            <img src={githubIcon} alt="GitHub Icon" /> 
          </a>

          <a href="https://www.instagram.com/kpriyars/" target="_blank">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
        </span>
        <p className={styles.description}>{texts.header.description}</p>

        <a href={resumePdf} download>
          <button className="hover">{texts.header.resume}</button>
        </a>
      </div>
    </section>
  );    
}

export default Carvalho;