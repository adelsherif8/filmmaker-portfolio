import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSection } from '../../context/SectionContext'
import useLang from '../../hooks/useLang'
import s from './Reel.module.css'

const LOCAL_VIDEO = '/videos/placid/reel_v3.mp4'

export default function Reel() {
  const ref     = useRef(null)
  const cvRef   = useRef(null)
  const videoRef = useRef(null)
  const [open, setOpen] = useState(false)
  const { registerSection } = useSection()
  const t = useLang()
  useEffect(() => registerSection('Reel', ref.current), [])

  // Bokeh canvas
  useEffect(() => {
    const cv = cvRef.current; if (!cv) return
    const ctx = cv.getContext('2d')
    let W, H, raf
    const resize = () => { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const bk = Array.from({length:16}, () => ({
      x:Math.random()*2000, y:Math.random()*1000, r:25+Math.random()*80,
      vx:(Math.random()-.5)*.2, vy:(Math.random()-.5)*.15,
      o:.04+Math.random()*.06, phase:Math.random()*Math.PI*2
    }))
    function draw() {
      ctx.clearRect(0,0,W,H)
      bk.forEach(b => {
        b.x+=b.vx; b.y+=b.vy; b.phase+=.007
        const a = b.o*(.6+.4*Math.sin(b.phase))
        const gr = ctx.createRadialGradient(b.x/2000*W,b.y/1000*H,0,b.x/2000*W,b.y/1000*H,b.r)
        gr.addColorStop(0,`rgba(184,151,58,${a})`); gr.addColorStop(1,'rgba(184,151,58,0)')
        ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(b.x/2000*W,b.y/1000*H,b.r,0,Math.PI*2); ctx.fill()
        if(b.x<-b.r*2000/W) b.x=2000+b.r; if(b.x>2000+b.r) b.x=-b.r
        if(b.y<-b.r*1000/H) b.y=1000+b.r; if(b.y>1000+b.r) b.y=-b.r
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const handleClose = () => {
    videoRef.current?.pause()
    setOpen(false)
  }

  return (
    <section ref={ref} id="reel" className={s.reel} dir={t.dir}>
      <canvas ref={cvRef} className={s.canvas} />
      <div className={s.lb} />
      <div className={s.lbBot} />
      <div className={s.center}>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:.9}} viewport={{once:true}}>
          <div className={s.eyebrow}>{t.reel.eyebrow}</div>
          <h2 className={s.title}>{t.reel.title[0]}<em>{t.reel.title[1]}</em></h2>
          <div className={s.playerWrap}>
            <div className={`${s.thumb} reel-play-el`} onClick={() => setOpen(true)}>
              <img src="/posters/placid-showreel-thumb.jpg" alt="Placid Disruption Showreel" className={s.thumbImg} />
              <div className={s.overlay} />
              <div className={s.scanlines} />
              <div className={s.play}>
                <motion.div className={s.playRing} whileHover={{scale:1.1}} transition={{type:'spring',stiffness:300}}>
                  <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="var(--gold2)"/></svg>
                </motion.div>
                <span className={s.playLbl}>{t.reel.play}</span>
              </div>
              <span className={s.dur}>{t.reel.dur}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className={s.modal} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={handleClose}>
            <motion.div initial={{scale:.93}} animate={{scale:1}} exit={{scale:.93}}
              transition={{duration:.35,ease:[.16,1,.3,1]}}
              onClick={e => e.stopPropagation()}>
              <video
                ref={videoRef}
                src={LOCAL_VIDEO}
                className={s.iframe}
                controls
                autoPlay
                style={{display:'block', background:'#000', height:'auto', maxHeight:'80vh'}}
              />
            </motion.div>
            <button className={s.close} onClick={handleClose}>{t.reel.close}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
