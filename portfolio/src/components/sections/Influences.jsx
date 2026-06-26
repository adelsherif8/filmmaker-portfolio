import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSection } from '../../context/SectionContext'
import { influences } from '../../data'
import useLang from '../../hooks/useLang'
import s from './Influences.module.css'

export default function Influences() {
  const ref = useRef(null)
  const { registerSection } = useSection()
  const [hovered, setHovered] = useState(null)
  const t = useLang()
  useEffect(() => registerSection('Influences', ref.current), [])

  return (
    <section ref={ref} id="influences" className={`${s.inf} section`} dir={t.dir}>
      <div className="s-label">{t.influences.label}</div>
      <motion.h2 className={s.heading}
        initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
        transition={{duration:.9}} viewport={{once:true}}>
        {t.influences.heading[0]}<em>{t.influences.heading[1]}</em>
      </motion.h2>

      <div className={s.grid}>
        {influences.map((film, i) => (
          <motion.div key={film.title}
            className={`${s.card} ${hovered === i ? s.cardActive : ''}`}
            style={{ background: film.bg }}
            initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
            transition={{duration:.8,delay:i*.09,ease:[.16,1,.3,1]}} viewport={{once:true}}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>

            {/* Poster thumbnail area */}
            <div className={s.poster}>
              {film.poster
                ? <img src={film.poster} alt={film.title} className={s.posterImg} />
                : <div className={s.posterIcon} style={{'--ic': film.color}}><i className={`fa-solid ${film.icon}`} /></div>
              }
              <div className={s.posterGrain} />
              <div className={s.posterLines} />
              <div className={s.posterPerf}>
                {Array.from({length:7}).map((_,pi) => <div key={pi} className={s.perf} />)}
              </div>
              <div className={s.posterPerf} style={{left:'auto',right:0}}>
                {Array.from({length:7}).map((_,pi) => <div key={pi} className={s.perf} />)}
              </div>
            </div>

            {/* Card info */}
            <div className={s.info}>
              <div className={s.cardFrame} />
              <div className={s.cardYear}>{film.year}</div>
              <h3 className={s.cardTitle}>{film.title}</h3>
              <div className={s.cardDir}>{t.influences.dir} {film.director}</div>

              <AnimatePresence>
                {hovered === i && (
                  <motion.div className={s.quote}
                    initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:4}} transition={{duration:.3}}>
                    &ldquo;{film.quote}&rdquo;
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className={s.cardGlow} style={{'--gc': film.color}} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
