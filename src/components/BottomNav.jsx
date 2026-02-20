import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ClipboardList, BookOpen, BarChart3 } from 'lucide-react'

const navItems = [
    { Icon: MapPin, label: '취급업체', id: 'map', path: '/map' },
    { Icon: ClipboardList, label: 'SOP', id: 'sop', path: '/sop' },
    { Icon: BookOpen, label: '매뉴얼', id: 'manual', path: '/manual' },
    { Icon: BarChart3, label: '데이터 허브', id: 'analysis', path: '/analysis' },
]

export default function BottomNav() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <motion.nav
            className="bottom-nav"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
        >
            {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                    <button
                        key={item.id}
                        className={`nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        {isActive && (
                            <motion.span
                                className="nav-active-dot"
                                layoutId="nav-dot"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="nav-item-icon">
                            <item.Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
                        </span>
                        <span className="nav-item-label">{item.label}</span>
                    </button>
                )
            })}
        </motion.nav>
    )
}
