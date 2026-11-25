import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSection } from '../../context/SectionContext'
import { breakdown, moreScripts } from '../../data'
import useLang from '../../hooks/useLang'
import s from './Breakdown.module.css'

const lineClass = { slug: s.slug, action: s.action, char: s.char, paren: s.paren, dialogue: s.dialogue }

export default function Breakdown() {
  const ref = useRef(null)
  const { registerSection } = useSection()
  const [active, setActive] = useState(null)
  const t = useLang()
  const [orig, setOrig] = useState(t.dir === 'rtl')
  useEffect(() => { setOrig(t.dir === 'rtl'); setActive(null) }, [t.dir])
  const isArabic = orig
  const excerpt     = isArabic ? breakdown.excerpt_ar     : breakdown.excerpt
  const annotations = isArabic ? breakdown.annotations_ar : breakdown.annotations
  useEffect(() => registerSection('Writing', ref.current), [])

  return (
    <section ref={ref} id="breakdown" className={`${s.wrap} section`} dir={t.dir}>
      <div className="s-label">{t.breakdown.label}</div>
      <div className={s.header}>
        <motion.h2 className={s.heading}
          initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
          transition={{duration:.9}} viewport={{once:true}}>
          {breakdown.title} <em>{breakdown.arabic}</em>
        </motion.h2>
        <motion.p className={s.sub}
          initial={{opacity:0}} whileInView={{opacity:1}}
          transition={{duration:.8,delay:.1}} viewport={{once:true}}>
          {t.breakdown.subtitle}
        </motion.p>
        <p className={s.logline}>{t.breakdown.logline}</p>
        <div className={s.toggle} role="group" aria-label="Script language">
          <button className={isArabic ? s.toggleOn : ''} onClick={() => { setOrig(true); setActive(null) }}>{t.breakdown.original}</button>
          <button className={!isArabic ? s.toggleOn : ''} onClick={() => { setOrig(false); setActive(null) }}>{t.breakdown.translation}</button>
        </div>
      </div>

      <div className={s.body}>
        {/* Film poster */}
        <motion.div className={s.posterCol}
          initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}}
          transition={{duration:.9,ease:[.16,1,.3,1]}} viewport={{once:true}}>
          <img src="/posters/qahwet-poster-new.jpg" alt="Qahwet El Mayteen poster" className={s.posterImg} />
          <div className={s.posterFrame} />
          <span className={s.posterLabel}>قهوة الميتين · 2025</span>
        </motion.div>

        {/* Screenplay column */}
        <motion.div className={s.script} dir={isArabic ? 'rtl' : 'ltr'}
          initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}}
          transition={{duration:.9,ease:[.16,1,.3,1]}} viewport={{once:true}}>
          <div className={s.scriptHeader}>
            <span className={s.scriptTitle}>{breakdown.title}</span>
            <span className={s.scriptMeta}>{t.breakdown.scriptMeta}</span>
          </div>
          <div className={`${s.page} ${isArabic ? s.pageAr : ''}`}>
            {excerpt.map((line, i) => {
              const isAnnotated = annotations.some(a => a.anchor === line.text)
              const isActive    = active === line.text
              return (
                <div key={i}
                  className={`${lineClass[line.type] || s.action} ${isAnnotated ? s.annotated : ''} ${isActive ? s.highlighted : ''}`}
                  onClick={() => isAnnotated && setActive(v => v === line.text ? null : line.text)}>
                  {line.text}
                  {isAnnotated && <i className={`fa-solid fa-circle-dot ${s.pin}`} />}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Annotations column */}
        <motion.div className={s.annotations} dir={isArabic ? 'rtl' : 'ltr'}
          initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}}
          transition={{duration:.9,delay:.1,ease:[.16,1,.3,1]}} viewport={{once:true}}>
          <div className={s.annotTitle}>
            <i className="fa-solid fa-pen-nib" />
            {t.breakdown.writerNote}
          </div>
          {annotations.map((a, i) => (
            <motion.div key={i} className={`${s.note} ${active === a.anchor ? s.noteActive : ''}`}
              onClick={() => setActive(v => v === a.anchor ? null : a.anchor)}
              whileHover={{x: 4}} transition={{duration:.2}}>
              <div className={s.noteNum}>0{i + 1}</div>
              <div>
                <div className={s.noteAnchor}>&ldquo;{a.anchor.length > 70 ? a.anchor.slice(0, 70) + '…' : a.anchor}&rdquo;</div>
                <AnimatePresence>
                  {active === a.anchor && (
                    <motion.p className={s.noteText}
                      initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}}
                      exit={{opacity:0,height:0}} transition={{duration:.35}}>
                      {a.note}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
          <p className={s.hint}>{t.breakdown.hint}</p>
          <a href="#contact" className={s.request}><i className="fa-solid fa-file-pdf" /> {t.breakdown.request}</a>
        </motion.div>
      </div>

      {/* More original scripts */}
      <div className={s.more}>
        <h3 className={s.moreTitle}>{t.breakdown.moreTitle}</h3>
        <p className={s.moreSub}>{t.breakdown.moreSub}</p>
        <div className={s.moreGrid}>
          {moreScripts.map((m, i) => (
            <motion.article key={m.title} className={s.moreCard}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
              transition={{duration:.6,delay:i*.08}} viewport={{once:true}}>
              <div className={s.moreTop}>
                <i className={`fa-solid ${m.icon}`} />
                <span>{t.dir === 'rtl' ? m.genre_ar : m.genre} · {m.pages} · {m.year}</span>
              </div>
              <div className={s.moreName}>{t.dir === 'rtl' ? m.ar : m.title}</div>
              <div className={s.moreAr}>{t.dir === 'rtl' ? m.title : `${m.ar} · ${m.en_t}`}</div>
              <p className={s.moreLog}>{t.dir === 'rtl' ? m.logline_ar : m.logline}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
