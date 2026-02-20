import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SubPageHeader({ title }) {
    const navigate = useNavigate()

    return (
        <motion.header
            className="subpage-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ width: '40px' }} />
            <h1 className="subpage-header-title">{title}</h1>
            <button
                className="subpage-home-btn"
                onClick={() => navigate('/')}
                aria-label="홈으로"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            </button>
        </motion.header>
    )
}
