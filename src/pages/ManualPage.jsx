import { motion } from 'framer-motion'
import { Beaker, Database, AlertTriangle, Layers, X } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function ManualPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
    }

    const inventoryData = [
        { id: 1, office: '진주', vermiculite: 104, sand: 28 },
        { id: 2, office: '통영', vermiculite: 0, sand: 0 },
        { id: 3, office: '사천', vermiculite: 39, sand: 40 },
        { id: 4, office: '김해동부', vermiculite: 250, sand: 0 },
        { id: 5, office: '김해서부', vermiculite: 140, sand: 0 },
        { id: 6, office: '밀양', vermiculite: 124, sand: 0 },
        { id: 7, office: '거제', vermiculite: 0, sand: 0 },
        { id: 8, office: '양산', vermiculite: 125, sand: 245 },
        { id: 9, office: '의령', vermiculite: 21, sand: 14 },
        { id: 10, office: '함안', vermiculite: 150, sand: 0 },
        { id: 11, office: '창녕', vermiculite: 120, sand: 0 },
        { id: 12, office: '고성', vermiculite: 48, sand: 0 },
        { id: 13, office: '남해', vermiculite: 0, sand: 0 },
        { id: 14, office: '하동', vermiculite: 23, sand: 0 },
        { id: 15, office: '산청', vermiculite: 0, sand: 0 },
        { id: 16, office: '함양', vermiculite: 0, sand: 0 },
        { id: 17, office: '거창', vermiculite: 100, sand: 0 },
        { id: 18, office: '합천', vermiculite: 0, sand: 0 },
    ]

    const wasteTypes = [
        { name: '스크랩 (Scrap)', desc: '금속 절삭 시 발생하는 부스러기나 폐기물이며, 수거하여 재생함', img: '/images/scrap.webp' },
        { name: '드로스 (Dross)', desc: '스크랩 용해 시 표면/바닥에 발생하는 이물질(앙금). 보통 식혀서 덩어리로 보관', img: '/images/dross.webp' },
        { name: '드로스 잔회', desc: '드로스 재처리 후 남는 가루 찌꺼기. 알루미늄 드로스 잔회는 물과 반응 시 자연발화 위험' },
        { name: '슬러지 (Sludge)', desc: '용해 과정 중 바닥에 침전되는 찌꺼기. 검은빛 분말("재") 형태이며 화재진압 시 가장 위험', img: '/images/sludge.webp' },
        { name: '인고트 (Ingot)', desc: '"괴"라고도 하며 용융 상태에서 불순물 제거 후 정제하여 생산된 제품', img: '/images/ingoat.webp' }
    ]

    return (
        <motion.div
            className="manual-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ paddingBottom: '110px' }}
        >
            {/* 1. 금속화재 소화약제 */}
            <motion.section variants={itemVariants} style={{ marginBottom: '32px' }}>
                <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <Beaker size={20} color="#6366F1" />
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1E293B' }}>금속화재 소화약제 비교</h2>
                </div>

                <div style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                            <thead>
                                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                                    <th style={{ padding: '12px 16px', textAlign: 'center', color: '#64748B', fontWeight: '700', width: '25%' }}>구분</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'center', color: '#4338CA', fontWeight: '800' }}>팽창질석</th>
                                    <th style={{ padding: '12px 16px', textAlign: 'center', color: '#B45309', fontWeight: '800' }}>건조사</th>
                                </tr>
                            </thead>
                            <tbody style={{ lineHeight: '1.6' }}>
                                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '12px 16px', background: '#F8FAFC', color: '#64748B', fontWeight: '700', textAlign: 'center' }}>형태</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#475569' }}>고체</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#475569' }}>고체</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '12px 16px', background: '#F8FAFC', color: '#64748B', fontWeight: '700', textAlign: 'center' }}>성분</td>
                                    <td style={{ padding: '12px 16px', color: '#475569' }}>가열하면 팽창되는 성질을 가진 물질</td>
                                    <td style={{ padding: '12px 16px', color: '#475569' }}>건조된 모래</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '12px 16px', background: '#F8FAFC', color: '#64748B', fontWeight: '700', textAlign: 'center' }}>특성</td>
                                    <td style={{ padding: '12px 16px', fontSize: '12px', color: '#475569' }}>비중이 낮고 경제적이며 취급 용이하나 재발화 위험 존재</td>
                                    <td style={{ padding: '12px 16px', fontSize: '12px', color: '#475569' }}>밀폐에 효과적이나 일정 시간 뒤 내부 온도 상승 위험</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                    <td style={{ padding: '12px 16px', background: '#F8FAFC', color: '#64748B', fontWeight: '700', textAlign: 'center' }}>소화경과</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '700', color: '#1E293B' }}>14시간</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', fontWeight: '700', color: '#1E293B' }}>17시간 이상</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 16px', background: '#F8FAFC', color: '#64748B', fontWeight: '700', textAlign: 'center' }}>소요비용</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#6366F1', fontWeight: '700' }}>7,995원</td>
                                    <td style={{ padding: '12px 16px', textAlign: 'center', color: '#6366F1', fontWeight: '700' }}>51,510원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ marginTop: '10px', fontSize: '11px', color: '#94A3B8', textAlign: 'right' }}>
                    ※ 2020년 국립소방연구원 실험 결과 (마그네슘분말 2kg 기준)
                </div>
            </motion.section>

            {/* 2. 보유현황 */}
            <motion.section variants={itemVariants} style={{ marginBottom: '32px' }}>
                <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <Database size={20} color="#059669" />
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1E293B' }}>약제 보유현황</h2>
                </div>
                <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px', marginLeft: '30px' }}>(2026. 02. 04. 기준)</div>

                <div style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                    <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                            <thead style={{ position: 'sticky', top: 0, zIndex: 5 }}>
                                <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
                                    <th style={{ padding: '12px', color: '#475569', fontWeight: '700' }}>관 서</th>
                                    <th style={{ padding: '12px', color: '#475569', fontWeight: '700' }}>팽창질석(포)</th>
                                    <th style={{ padding: '12px', color: '#475569', fontWeight: '700' }}>건조사(포)</th>
                                </tr>
                                <tr style={{ background: '#ECFDF5', borderBottom: '2px solid #10B981' }}>
                                    <td style={{ padding: '12px', textAlign: 'center', fontWeight: '800', color: '#065F46' }}>합 계</td>
                                    <td style={{ padding: '12px', textAlign: 'center', fontWeight: '800', color: '#065F46' }}>1,244</td>
                                    <td style={{ padding: '12px', textAlign: 'center', fontWeight: '800', color: '#065F46' }}>327</td>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryData.map((item) => (
                                    <tr key={item.id} style={{
                                        borderBottom: '1px solid #F1F5F9',
                                        background: item.vermiculite > 200 ? '#F0F9FF' : 'transparent'
                                    }}>
                                        <td style={{ padding: '10px 12px', textAlign: 'center', color: '#475569', fontWeight: '600' }}>{item.office}</td>
                                        <td style={{ padding: '10px 12px', textAlign: 'center', color: '#1E293B' }}>{item.vermiculite || '-'}</td>
                                        <td style={{ padding: '10px 12px', textAlign: 'center', color: '#1E293B' }}>{item.sand || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.section>

            {/* 3. 금속폐기물 형태 */}
            <motion.section variants={itemVariants} style={{ marginBottom: '32px' }}>
                <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <Layers size={20} color="#F43F5E" />
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1E293B' }}>금속폐기물 형태 및 특징</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {wasteTypes.map((waste, idx) => (
                        <div key={idx} style={{
                            background: '#FFF',
                            padding: '16px',
                            borderRadius: '16px',
                            border: '1px solid #E2E8F0',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F43F5E' }} />
                                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B' }}>{waste.name}</span>
                                </div>
                                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginLeft: '14px' }}>
                                    {waste.desc}
                                </p>
                            </div>
                            {waste.img && (
                                <PhotoProvider
                                    overlayRender={({ onClose }) => (
                                        <div className="pv-custom-toolbar">
                                            <button className="pv-custom-close" onClick={onClose}>
                                                <X size={24} />
                                            </button>
                                        </div>
                                    )}
                                >
                                    <PhotoView src={waste.img}>
                                        <div style={{ width: '80px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, cursor: 'zoom-in', border: '1px solid #F1F5F9' }}>
                                            <img src={waste.img} alt={waste.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </PhotoView>
                                </PhotoProvider>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '20px',
                    padding: '16px',
                    background: '#FFFBEB',
                    borderRadius: '12px',
                    border: '1px solid #FEF3C7',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AlertTriangle size={18} color="#F59E0B" />
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#92400E' }}>위험성 등급</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#92400E', fontWeight: '600' }}>
                        슬러지 {">"} 드로스(잔회) {">"} 인고트 {">"} 스크랩
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}
