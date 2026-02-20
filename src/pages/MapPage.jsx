import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import {
    X, Phone, MapPin, Box, Building2,
    ShieldAlert, Droplets, Activity,
    User, Truck, Waves, ClipboardList, Info
} from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

// Gimhae center coordinates
const GIMHAE_CENTER = { lat: 35.3060, lng: 128.8735 }

// Sharp SVG Red Pin (Thin) as Data URI to prevent broken image issues
const RED_PIN_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
<svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 36 12 36C12 36 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="#EF4444"/>
  <circle cx="12" cy="12" r="5" fill="white"/>
</svg>
`)}`

export default function MapPage() {
    const [vendors, setVendors] = useState([])
    const [selected, setSelected] = useState(null)
    const [mapReady, setMapReady] = useState(false)
    const mapInstanceRef = useRef(null)
    const markersRef = useRef([])

    // Initialize Kakao Map
    const initMap = useCallback(() => {
        const container = document.getElementById('map')
        if (!container || mapInstanceRef.current) return

        const { kakao } = window
        const options = {
            center: new kakao.maps.LatLng(GIMHAE_CENTER.lat, GIMHAE_CENTER.lng),
            level: 8
        }

        const map = new kakao.maps.Map(container, options)
        mapInstanceRef.current = map
        setMapReady(true)
    }, [])

    // Poll for SDK readiness (script is in index.html)
    useEffect(() => {
        let timer
        const checkSDK = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => initMap())
            } else {
                timer = setTimeout(checkSDK, 100)
            }
        }
        checkSDK()
        return () => clearTimeout(timer)
    }, [initMap])

    // Load vendor data
    useEffect(() => {
        fetch('/data/vendors.json')
            .then((r) => r.json())
            .then(setVendors)
            .catch(console.error)
    }, [])

    // Render markers when map and vendors are ready
    useEffect(() => {
        const map = mapInstanceRef.current
        if (!map || !vendors.length) return

        const { kakao } = window

        // Clear existing markers
        markersRef.current.forEach(m => m.setMap(null))
        markersRef.current = []

        // Create Marker Image from SVG Data URI
        const imageSize = new kakao.maps.Size(24, 36)
        const imageOption = { offset: new kakao.maps.Point(12, 36) }
        const markerImage = new kakao.maps.MarkerImage(RED_PIN_SVG, imageSize, imageOption)

        vendors.forEach((v) => {
            const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(v.lat, v.lng),
                map: map,
                title: v.company_name,
                image: markerImage
            })

            kakao.maps.event.addListener(marker, 'click', () => {
                setSelected(v)
            })

            markersRef.current.push(marker)
        })
    }, [mapReady, vendors])

    // Handle drag close
    const onDragEnd = (event, info) => {
        // Close if dragged down significantly or with high velocity
        if (info.offset.y > 110 || info.velocity.y > 600) {
            setSelected(null)
        }
    }

    return (
        <div className="map-page">
            {/* ── Map container ── */}
            <div
                id="map"
                className="map-container"
                style={{ width: '100%', height: 'calc(100dvh - 130px)' }}
            />

            {/* Loading overlay */}
            {!mapReady && (
                <div className="map-loading">
                    <div className="map-loading-spinner" />
                    <span>지도 데이터를 불러오고 있습니다...</span>
                </div>
            )}

            {/* ── Vendor count badge ── */}
            {mapReady && (
                <motion.div
                    className="map-badge"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Activity size={14} />
                    <span>취급업체 <strong>{vendors.length}</strong>개소</span>
                </motion.div>
            )}

            {/* ── Bottom Sheet ── */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div
                            className="sheet-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                        />

                        <motion.div
                            className="sheet"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                        >
                            <div className="sheet-handle-bar">
                                <div className="sheet-handle" />
                            </div>

                            <div className="sheet-header">
                                <div style={{ width: '36px' }} />
                                <h3 className="sheet-title">{selected.company_name}</h3>
                                <button className="sheet-close" onClick={() => setSelected(null)}>
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="sheet-body" style={{ background: '#F9FAFB', gap: '14px' }}>

                                {/* Image Gallery */}
                                {selected.images && selected.images.length > 0 && (
                                    <PhotoProvider>
                                        <div className="info-section" style={{ padding: '0', background: 'transparent', boxShadow: 'none' }}>
                                            <div style={{
                                                display: 'flex',
                                                gap: '12px',
                                                overflowX: 'auto',
                                                padding: '10px 20px',
                                                scrollSnapType: 'x mandatory',
                                                WebkitOverflowScrolling: 'touch'
                                            }}>
                                                {selected.images.map((url, index) => (
                                                    <PhotoView key={index} src={url}>
                                                        <div
                                                            style={{
                                                                flex: '0 0 280px',
                                                                scrollSnapAlign: 'start',
                                                                borderRadius: '12px',
                                                                overflow: 'hidden',
                                                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                                background: '#fff',
                                                                aspectRatio: '800 / 500',
                                                                cursor: 'zoom-in'
                                                            }}
                                                        >
                                                            <img
                                                                src={url}
                                                                alt={`업체사진 ${index + 1}`}
                                                                style={{
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'cover'
                                                                }}
                                                            />
                                                        </div>
                                                    </PhotoView>
                                                ))}
                                            </div>
                                        </div>
                                    </PhotoProvider>
                                )}

                                {/* 🔵 Section 1: 기본 업체 정보 */}
                                <div className="info-section">
                                    <div className="section-header">
                                        <Info size={20} className="sheet-row-icon" style={{ color: '#334155' }} />
                                        <span className="section-header-title">기본 업체 정보</span>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                                        <div className="sheet-row">
                                            <MapPin size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">업체 위치</span>
                                                <span className="sheet-value">{selected.location}</span>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <Phone size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">비상 연락처</span>
                                                <div className="sheet-contact-list">
                                                    {selected.contact?.map((tel, i) => (
                                                        <a key={i} href={`tel:${tel}`} className="sheet-tel-link">
                                                            {tel}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <Box size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">취급물질 및 규모</span>
                                                <span className="sheet-value">
                                                    {selected.handled_materials} / {selected.storage_amount_monthly}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <User size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">관계인 정보</span>
                                                <span className="sheet-value">
                                                    대표: {selected.owner_manager || '-'}<br />안전관리자: {selected.safety_manager || '-'}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <Building2 size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">건축물 구조 및 인원</span>
                                                <span className="sheet-value">
                                                    구조: {selected.building_structure}<br />
                                                    직원수: {selected.employee_count} (숙소: {selected.dormitory?.status})
                                                </span>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <Waves size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">용수시설</span>
                                                <span className="sheet-value">{selected.nearby_fire_water_facility}</span>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <Droplets size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">보유 소방 시설</span>
                                                <span className="sheet-value">
                                                    소화기: {selected.fire_extinguisher_quantity}개<br />
                                                    소화약제: {selected.extinguishing_agents?.map(a => `${a.item}(${a.quantity})`).join(', ') || '없음'}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="sheet-row">
                                            <Truck size={20} className="sheet-row-icon" />
                                            <div>
                                                <span className="sheet-label">소방 출동 여건</span>
                                                <span className="sheet-value">차량 진입: {selected.fire_truck_access}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 🟠 Section 2: 위험물 상세 현황 */}
                                {selected.hazardous_materials_inventory && (
                                    <div className="info-section hazard-group">
                                        <div className="section-header" style={{ borderColor: '#FDE68A' }}>
                                            <ClipboardList size={20} className="sheet-row-icon" style={{ color: '#D97706' }} />
                                            <span className="section-header-title hazard-title">위험물 재고 현황 (Class 별)</span>
                                        </div>
                                        <div className="sheet-value" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {Object.entries(selected.hazardous_materials_inventory).map(([key, val], i) => (
                                                <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)', paddingBottom: '8px' }}>
                                                    <strong style={{ color: '#92400E', display: 'block', marginBottom: '4px' }}>
                                                        • {key.replace('_', ' ')}
                                                    </strong>
                                                    <span style={{ color: '#451a03', paddingLeft: '14px', display: 'block' }}>{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 🔴 Section 3: 유의사항 */}
                                {selected.firefighting_issues?.length > 0 && (
                                    <div className="sheet-issues">
                                        <span className="sheet-issues-label">
                                            <ShieldAlert size={20} />
                                            유의사항
                                        </span>
                                        <ul className="sheet-issues-list">
                                            {selected.firefighting_issues.map((issue, i) => (
                                                <li key={i}>{issue}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div style={{ height: '80px' }} />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
