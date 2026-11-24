import { useTheme } from '../../context/ThemeContext'
import s from './Controls.module.css'

export default function Controls() {
  const { theme, toggleDay, arabicMode, toggleArabic } = useTheme()
  const handleDay    = () => toggleDay()
  const handleArabic = () => toggleArabic()

  return (
    <div className={s.panel}>
      <button className={`${s.btn} ${theme === 'day' ? s.active : ''}`} onClick={handleDay} title="Day / Night">
        <i className={`fa-solid ${theme === 'day' ? 'fa-moon' : 'fa-sun'} ${s.icon}`} />
        <span className={s.lbl}>{theme === 'day' ? 'NIGHT' : 'DAY'}</span>
      </button>
      <button className={`${s.btn} ${arabicMode ? s.active : ''}`} onClick={handleArabic} title="Arabic / English">
        <i className={`fa-solid fa-language ${s.icon}`} />
        <span className={s.lbl}>{arabicMode ? 'EN' : 'AR'}</span>
      </button>
      <a href="/cv.html" target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.cvBtn}`} title="View CV">
        <i className={`fa-solid fa-file-lines ${s.icon}`} />
        <span className={s.lbl}>CV</span>
      </a>
    </div>
  )
}
