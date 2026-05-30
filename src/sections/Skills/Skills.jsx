import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { useContext } from 'react';

function Skills() {
  const {theme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const { texts } = useContext(LanguageContext);

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>{texts.skills.title}</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="PYTHON" />
          <SkillList src={checkMarkIcon} skill="C++" />
          <SkillList src={checkMarkIcon} skill="SQL" />
          <SkillList src={checkMarkIcon} skill="JAVASCRIPT" />
          <SkillList src={checkMarkIcon} skill="REACT" />
        </div>
        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="NUMPY" />
          <SkillList src={checkMarkIcon} skill="PANDAS" />
          <SkillList src={checkMarkIcon} skill="MATPLOTLIB" />
          <SkillList src={checkMarkIcon} skill="GIT" />
        </div>
        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="TENSORFLOW" />
          <SkillList src={checkMarkIcon} skill="SCIKITLEARN" />
          <SkillList src={checkMarkIcon} skill="COMPUTERVISION" />
          <SkillList src={checkMarkIcon} skill="NLP" />
        </div>
        <hr />
    </section>
  );
}

export default Skills;
