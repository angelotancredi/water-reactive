import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ClipboardList, BookOpen, BarChart3 } from 'lucide-react'

const cards = [
    { title: '취급업체 현황', icon: '/icons/menu_1.png', fallback: '🏭', path: '/map' },
    { title: 'SOP 221', Icon: ClipboardList, color: '#F59E0B', path: '/sop' },
    { title: '대응 매뉴얼', Icon: BookOpen, color: '#10B981', path: '/manual' },
    { title: '데이터 허브', Icon: BarChart3, color: '#EF4444', path: '/analysis' },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: 'spring', stiffness: 350, damping: 28 },
    },
}

export default function BentoGrid() {
    const navigate = useNavigate()

    return (
        <section className="bento-section">
            <motion.div
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="bento-card"
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => navigate(card.path)}
                    >
                        <div className="bento-card-icon-wrap">
                            {card.Icon ? (
                                <card.Icon size={40} color={card.color} strokeWidth={1.8} />
                            ) : (
                                <>
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="bento-card-icon-img"
                                        onError={(e) => {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'flex'
                                        }}
                                    />
                                    <span className="bento-card-icon-fallback" style={{ display: 'none' }}>
                                        {card.fallback}
                                    </span>
                                </>
                            )}
                        </div>
                        <span className="bento-card-title">{card.title}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
