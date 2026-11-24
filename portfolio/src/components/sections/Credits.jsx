import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useSection } from '../../context/SectionContext'
import { credits } from '../../data'
import useLang from '../../hooks/useLang'
import s from './Credits.module.css'

export default function Credits() {
  const ref = useRef(null)
  const { registerSection } = useSection()
  const t = useLang()
  useEffect(() => registerSection('Credits', ref.current), [])

  return (
    <section ref={ref} id="credits" className={`${s.wrap} section`} dir={t.dir}>
      <div className="s-label">{t.credits.label}</div>
      <motion.h2 className={s.heading}
        initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
        transition={{duration:.9}} viewport={{once:true}}>
        {t.credits.heading[0]}<em>{t.credits.heading[1]}</em>
      </motion.h2>

      <div className={s.table} role="table" aria-label="Credits">
        <div className={`${s.row} ${s.head}`} role="row">
          {t.credits.cols.map(c => <span key={c} role="columnheader">{c}</span>)}
        </div>
        {credits.map((c, i) => (
          <motion.div key={i} className={s.row} role="row"
            initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
            transition={{duration:.6,delay:i*.06}} viewport={{once:true}}>
            <span className={s.year} role="cell">{c.year}</span>
            <span className={s.title} role="cell">{c.title}</span>
            <span className={s.role} role="cell">{c.role}</span>
            <span className={s.format} role="cell">{c.format}</span>
            <span className={s.company} role="cell">{c.company}</span>
          </motion.div>
        ))}
      </div>

      <div className={s.award}>
        <i className="fa-solid fa-award" />
        <span>{t.credits.award}</span>
      </div>
    </section>
  )
}
