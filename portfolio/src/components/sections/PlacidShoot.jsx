import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSection } from '../../context/SectionContext'
import { placidShoot } from '../../data'
import useLang from '../../hooks/useLang'
import s from './PlacidShoot.module.css'

export default function PlacidShoot() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const { registerSection } = useSection()
  const t = useLang()
  useEffect(() => registerSection('Placid Shoot', ref.current), [])

  const handleClose = () => { videoRef.current?.pause(); setActiveVideo(null) }

  return (
    <section ref={ref} id="placid-shoot" className={`${s.wrap} section`} dir={t.dir}>
      <div className="s-label">{t.placidShoot.label}</div>

      <motion.h2 className={s.heading}
        initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
        transition={{duration:.9}} viewport={{once:true}}>
        {t.placidShoot.heading[0]}<em>{t.placidShoot.heading[1]}</em>
      </motion.h2>

      <motion.p className={s.sub}
        initial={{opacity:0}} whileInView={{opacity:1}}
        transition={{duration:.8,delay:.1}} viewport={{once:true}}>
        {t.placidShoot.sub}
      </motion.p>

      <div className={s.grid}>
        {placidShoot.map((item, i) => (
          <motion.div key={i} className={`${s.item} ${item.kind === 'video' ? s.videoItem : ''} hoverable`}
            initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
            transition={{duration:.8,delay:i*.08,ease:[.16,1,.3,1]}} viewport={{once:true}}
            onClick={() => item.kind === 'video' && setActiveVideo(item.src)}>
            <img src={item.kind === 'video' ? item.poster : item.src} alt={item.label} className={s.img} loading="lazy" />
            <div className={s.overlay} />
            <div className={s.frame} />
            {item.kind === 'video' && (
              <div className={s.playBadge}>
                <div className={s.playRing}>
                  <i className="fa-solid fa-play" />
                </div>
                <span className={s.playLbl}>{t.placidShoot.play}</span>
              </div>
            )}
            <div className={s.caption}>
              <span className={s.captionTag}>{item.kind}</span>
              <span className={s.captionLbl}>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div className={s.modal}
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={handleClose}>
            <motion.div className={s.modalInner}
              initial={{scale:.92}} animate={{scale:1}} exit={{scale:.92}}
              transition={{duration:.35,ease:[.16,1,.3,1]}}
              onClick={e => e.stopPropagation()}>
              <video ref={videoRef} src={activeVideo} className={s.video} controls autoPlay />
              <button className={s.close} onClick={handleClose}>
                <i className="fa-solid fa-xmark" /> Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
