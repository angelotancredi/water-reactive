import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── State machine ──
const STATES = {
    IDLE: 'IDLE',
    HEATING: 'HEATING',
    HEAT_DONE: 'HEAT_DONE',
    BURNING: 'BURNING',
    BURN_DONE: 'BURN_DONE',
}

export default function HeroCanvas() {
    const videoRef1 = useRef(null)
    const videoRef2 = useRef(null)
    const [phase, setPhase] = useState(STATES.IDLE)
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    // Handle loading state
    useEffect(() => {
        let loadedCount = 0
        const handleLoaded = () => {
            loadedCount++
            if (loadedCount >= 2) {
                setLoading(false)
            }
        }

        const v1 = videoRef1.current
        const v2 = videoRef2.current

        if (v1 && v2) {
            v1.addEventListener('loadeddata', handleLoaded)
            v2.addEventListener('loadeddata', handleLoaded)
            v1.load()
            v2.load()
        }

        return () => {
            v1?.removeEventListener('loadeddata', handleLoaded)
            v2?.removeEventListener('loadeddata', handleLoaded)
        }
    }, [])

    // Update progress bar
    useEffect(() => {
        let raf
        const update = () => {
            let activeVideo = null
            if (phase === STATES.HEATING) activeVideo = videoRef1.current
            if (phase === STATES.BURNING) activeVideo = videoRef2.current

            if (activeVideo && activeVideo.duration) {
                setProgress(activeVideo.currentTime / activeVideo.duration)
            }
            raf = requestAnimationFrame(update)
        }
        update()
        return () => cancelAnimationFrame(raf)
    }, [phase])

    // Handle touch / click
    const handleInteract = useCallback(() => {
        if (loading) return

        if (phase === STATES.IDLE) {
            setPhase(STATES.HEATING)
            if (videoRef1.current) {
                videoRef1.current.currentTime = 0
                videoRef1.current.playbackRate = 1.4 // 1.4x speed
                videoRef1.current.play()
            }
        } else if (phase === STATES.HEAT_DONE) {
            setPhase(STATES.BURNING)
            if (videoRef2.current) {
                videoRef2.current.currentTime = 0
                videoRef2.current.playbackRate = 1.4 // 1.4x speed
                videoRef2.current.play()
            }
        }
    }, [phase, loading])

    const handleVideo1End = () => {
        setPhase(STATES.HEAT_DONE)
        setProgress(0)
    }

    const handleVideo2End = () => {
        setPhase(STATES.BURN_DONE)
        setProgress(0)
    }

    const handleReset = useCallback((e) => {
        e.stopPropagation()
        setPhase(STATES.IDLE)
        setProgress(0)
        if (videoRef1.current) {
            videoRef1.current.pause()
            videoRef1.current.currentTime = 0
        }
        if (videoRef2.current) {
            videoRef2.current.pause()
            videoRef2.current.currentTime = 0
        }
    }, [])

    // ── Derived UI flags ──
    const isAnimating = phase === STATES.HEATING || phase === STATES.BURNING
    const showCTA = !loading && (phase === STATES.IDLE || phase === STATES.HEAT_DONE)
    const showWarning = phase === STATES.BURN_DONE

    const ctaLabel = phase === STATES.IDLE
        ? '터치하여 가열 시작'
        : '터치하여 주수 시작'

    const fireIcon = (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
            <path d="M12 23C7.58 23 4 19.69 4 15.5c0-2.47 1.19-4.71 3.08-6.34.65-.56 1.63-.12 1.66.73.04 1.15.39 2.25 1.02 3.16.19.27.57.3.78.04.95-1.17 1.56-2.56 1.78-4.1.08-.55.63-.86 1.12-.59C16.07 9.84 20 13.03 20 15.5 20 19.69 16.42 23 12 23z" fill="#FF6B35" />
            <path d="M12 23c-2.21 0-4-1.55-4-3.5 0-1.14.69-2.18 1.78-2.88a.5.5 0 0 1 .72.22c.24.54.62 1.02 1.12 1.37a.3.3 0 0 0 .45-.1c.3-.55.47-1.15.5-1.78a.5.5 0 0 1 .8-.37C14.92 17.1 16 18.22 16 19.5c0 1.95-1.79 3.5-4 3.5z" fill="#FFBE0B" />
        </svg>
    )

    const waterIcon = (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
            <path d="M12 2.69l.66.73C13.36 4.18 17 8.34 17 13a5 5 0 0 1-10 0c0-4.66 3.64-8.82 4.34-9.58L12 2.69z" fill="#3B82F6" />
            <path d="M12 18a3 3 0 0 1-3-3c0-2.2 1.5-4.5 2.5-5.8a.6.6 0 0 1 1 0c1 1.3 2.5 3.6 2.5 5.8a3 3 0 0 1-3 3z" fill="#93C5FD" />
        </svg>
    )

    return (
        <section className="hero-section" onClick={handleInteract}>
            {/* ── Title overlay (top) ── */}
            <motion.div
                className={`hero-title-overlay hero-title-overlay--top ${showWarning ? 'hero-title--danger' : ''}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="hero-title-glass">
                    <h1 className="hero-title">금수성물질 화재대응전략</h1>
                    <p className="hero-subtitle">김해동부소방서</p>
                </div>
            </motion.div>

            {/* ── Video Layers ── */}
            <div className="hero-video-container" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <video
                    ref={videoRef1}
                    className="hero-video"
                    src="/videos/heat_final_3mb.webm"
                    playsInline
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: (phase === STATES.IDLE || phase === STATES.HEATING || phase === STATES.HEAT_DONE) ? 'block' : 'none'
                    }}
                    onEnded={handleVideo1End}
                />
                <video
                    ref={videoRef2}
                    className="hero-video"
                    src="/videos/heat2_final_3mb.webm"
                    playsInline
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: (phase === STATES.BURNING || phase === STATES.BURN_DONE) ? 'block' : 'none'
                    }}
                    onEnded={handleVideo2End}
                />
            </div>

            {/* ── Loading overlay ── */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        className="hero-loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="hero-loading-spinner" />
                        <span className="hero-loading-text">영상 로딩 중...</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── CTA button ── */}
            <AnimatePresence>
                {showCTA && (
                    <div className="hero-overlay">
                        <motion.button
                            className="hero-cta-btn"
                            key={phase}
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 32,
                                mass: 0.8
                            }}
                            whileTap={{ scale: 0.94 }}
                            onClick={(e) => { e.stopPropagation(); handleInteract() }}
                        >
                            <span className="cta-icon">{phase === STATES.IDLE ? fireIcon : waterIcon}</span>
                            {ctaLabel}
                        </motion.button>
                    </div>
                )}
            </AnimatePresence>

            {/* ── Progress bar ── */}
            <AnimatePresence>
                {isAnimating && (
                    <motion.div
                        className="hero-progress-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ width: `${progress * 100}%` }}
                    />
                )}
            </AnimatePresence>

            {/* ── Fire warning overlay ── */}
            <AnimatePresence>
                {showWarning && (
                    <motion.div
                        className="hero-warning-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="hero-warning-content"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
                        >
                            <span className="hero-warning-icon">⚠️</span>
                            <h2 className="hero-warning-title">주수 금지</h2>
                            <p className="hero-warning-sub">DO NOT USE WATER</p>
                        </motion.div>

                        <motion.button
                            className="hero-reset-btn"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            whileTap={{ scale: 0.9, rotate: -180 }}
                            onClick={handleReset}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                            </svg>
                        </motion.button>

                        <motion.div
                            className="hero-warning-pulse"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
