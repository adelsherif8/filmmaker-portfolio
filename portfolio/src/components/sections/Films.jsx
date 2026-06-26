import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSection } from '../../context/SectionContext'
import { films } from '../../data'
import PlaceholderImg from '../ui/PlaceholderImg'
import useLang from '../../hooks/useLang'
import s from './Films.module.css'

function VideoModal({ src, onClose }) {
  return (
    <motion.div className={s.modal}
      initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
      onClick={onClose}>
      <motion.div className={s.modalInner}
        initial={{scale:.92}} animate={{scale:1}} exit={{scale:.92}}
        transition={{duration:.35,ease:[.16,1,.3,1]}}
        onClick={e => e.stopPropagation()}>
        <video src={src} className={s.video} controls autoPlay />
        <button className={s.modalClose} onClick={onClose}>
          <i className="fa-solid fa-xmark" /> Close
        </button>
      </motion.div>
    </motion.div>
  )
}

function CardMedia({ f }) {
  if (f.image) {
    return <img className={s.cardImg} src={f.image} alt={f.title} loading="lazy"
      style={{filter:'grayscale(.5) brightness(.55) contrast(1.1)'}} />
  }
  return <PlaceholderImg className={s.cardImg} icon={f.icon} label={f.title} sublabel={f.role} />
}

export default function Films() {
  const ref    = useRef(null)
  const slider = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)
  const { registerSection } = useSection()
  const t = useLang()
  useEffect(() => registerSection('Films', ref.current), [])

  // Drag scroll
  useEffect(() => {
    const el = slider.current; if (!el) return
    let isDown = false, startX, scrollLeft, didDrag = false
    const md = e => { isDown=true; didDrag=false; el.classList.add(s.dragging); startX=e.pageX-el.offsetLeft; scrollLeft=el.scrollLeft }
    const mu = ()  => { isDown=false; el.classList.remove(s.dragging) }
    const mm = e => {
      if(!isDown) return; e.preventDefault()
      const dx = e.pageX - el.offsetLeft - startX
      if (Math.abs(dx) > 4) didDrag = true
      el.scrollLeft = scrollLeft - dx * 1.4
    }
    el.addEventListener('mousedown',md); el.addEventListener('mouseleave',mu)
    el.addEventListener('mouseup',mu);   el.addEventListener('mousemove',mm)
    return () => { el.removeEventListener('mousedown',md); el.removeEventListener('mouseleave',mu); el.removeEventListener('mouseup',mu); el.removeEventListener('mousemove',mm) }
  }, [])

  return (
    <section ref={ref} id="films" className={s.films} dir={t.dir}>
      <div className={s.header}>
        <div className="s-label">{t.films.label}</div>
        <p className={s.intro}>{t.films.intro}</p>
      </div>

      <div ref={slider} className={s.slider}>
        {films.map((f, i) => (
          <motion.div key={f.id} className={`${s.card} film-card-el`}
            initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
            transition={{duration:.9,delay:i*.1,ease:[.16,1,.3,1]}} viewport={{once:true}}>

            <CardMedia f={f} />
            <div className={s.cardBg} />
            <div className={s.cardOverlay} />
            <div className={s.scanlines} />
            {['tl','tr','bl','br'].map(p=><div key={p} className={`${s.corner} ${s['c_'+p]}`}/>)}
            <span className={s.cardNum}>{f.num}</span>

            {/* Play button for cards with video */}
            {f.video && (
              <button className={s.playBtn} onClick={() => setActiveVideo(f.video)}>
                <div className={s.playRing}>
                  <i className="fa-solid fa-play" />
                </div>
                <span className={s.playLbl}>Watch Film</span>
              </button>
            )}

            <div className={s.cardInfo}>
              <div className={s.cardTags}>
                {f.tags.map(tag=><span key={tag} className={s.tag}>{tag}</span>)}
                <span className={s.role}>{f.role}</span>
              </div>
              <h3 className={s.cardTitle}>{f.title}</h3>
              {f.arabic && <div className={s.cardArabic}>{f.arabic}</div>}
              <p className={s.logline}>{f.logline}</p>
              <div className={s.cardSub}>{f.subtitle}</div>
              <p className={s.cardDesc}>{f.desc}</p>
            </div>
            <div className={s.cardLine}/>
          </motion.div>
        ))}
      </div>

      <div className={s.hint}>
        <svg viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M0 10h36M28 3l8 7-8 7"/>
        </svg>
        {t.films.hint}
      </div>

      <AnimatePresence>
        {activeVideo && <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />}
      </AnimatePresence>
    </section>
  )
}
