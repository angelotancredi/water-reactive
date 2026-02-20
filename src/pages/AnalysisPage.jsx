import { motion } from 'framer-motion'
import { Beaker, BarChart3, Database, AlertTriangle, Layers, Info, X } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function AnalysisPage() {
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

    return (
        <motion.div
            className="analysis-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ paddingBottom: '110px' }}
        >
            {/* 1. 화재 발생현황 */}
            <motion.section variants={itemVariants} style={{ marginBottom: '32px' }}>
                <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <BarChart3 size={20} color="#EF4444" />
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1E293B' }}>화재 발생현황(경남)</h2>
                </div>

                <div style={{ background: '#FEF2F2', padding: '12px 16px', borderRadius: '12px', border: '1px solid #FEE2E2', marginBottom: '16px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '800', color: '#991B1B', marginBottom: '4px' }}>
                        '20 ~ '25년 총 19건 발생
                    </div>
                    <div style={{ fontSize: '12px', color: '#B91C1C', opacity: 0.9 }}>
                        인명피해 1명(경상), 재산피해 58백만 원 발생 (화학 17, 자연·부주의 각 1건)
                    </div>
                </div>

                {/* 연도별 현황 테이블 */}
                <div style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: '20px' }}>
                    <div style={{ background: '#F8FAFC', padding: '10px 16px', borderBottom: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '700', color: '#475569' }}>
                        연도별 화재발생 현황
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                            <thead>
                                <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
                                    <th rowSpan="2" style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>구분</th>
                                    <th rowSpan="2" style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>건수</th>
                                    <th colSpan="3" style={{ padding: '8px', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>인명피해</th>
                                    <th colSpan="3" style={{ padding: '8px' }}>재산피해(천원)</th>
                                </tr>
                                <tr style={{ background: '#F1F5F9', borderBottom: '1px solid #E2E8F0' }}>
                                    <th style={{ padding: '6px', borderRight: '1px solid #E2E8F0' }}>합계</th>
                                    <th style={{ padding: '6px', borderRight: '1px solid #E2E8F0' }}>사망</th>
                                    <th style={{ padding: '6px', borderRight: '1px solid #E2E8F0' }}>부상</th>
                                    <th style={{ padding: '6px', borderRight: '1px solid #E2E8F0' }}>합계</th>
                                    <th style={{ padding: '6px', borderRight: '1px solid #E2E8F0' }}>부동산</th>
                                    <th style={{ padding: '6px' }}>동산</th>
                                </tr>
                            </thead>
                            <tbody style={{ textAlign: 'center' }}>
                                <tr style={{ background: '#F1F5F9', fontWeight: '800' }}>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>합계</td>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>19</td>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>1</td>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>0</td>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>1</td>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>58,218</td>
                                    <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>42,871</td>
                                    <td style={{ padding: '8px' }}>15,347</td>
                                </tr>
                                {[
                                    { y: '2025년', c: 3, p: 0, d: '3,736', r: '2,970', m: '766' },
                                    { y: '2024년', c: 4, p: 0, d: '14,735', r: '7,629', m: '7,106' },
                                    { y: '2023년', c: 2, p: 0, d: '4,853', r: '2,286', m: '2,567' },
                                    { y: '2022년', c: 2, p: 0, d: '113', r: '0', m: '113' },
                                    { y: '2021년', c: 2, p: 1, d: '3,949', r: '2,440', m: '1,509', i: 1 },
                                    { y: '2020년', c: 6, p: 0, d: '30,832', r: '27,546', m: '3,286' }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>{row.y}</td>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>{row.c}</td>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>{row.p}</td>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>-</td>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>{row.i || '-'}</td>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>{row.d}</td>
                                        <td style={{ padding: '8px', borderRight: '1px solid #E2E8F0' }}>{row.r}</td>
                                        <td style={{ padding: '8px' }}>{row.m}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 소방서별 현황 */}
                <div style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', marginBottom: '20px' }}>
                    <div style={{ background: '#F8FAFC', padding: '10px 16px', borderBottom: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '700', color: '#475569' }}>
                        소방서별 화재발생 현황
                    </div>
                    <div style={{ padding: '12px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
                            {[
                                { n: '합계', v: 19, bg: '#F1F5F9' }, { n: '진주', v: 1 }, { n: '김해동부', v: 2 }, { n: '김해서부', v: 5 },
                                { n: '밀양', v: 2 }, { n: '함안', v: 1 }, { n: '창녕', v: 3 }, { n: '하동', v: 1 },
                                { n: '산청', v: 1 }, { n: '거창', v: 2 }, { n: '합천', v: 1 }
                            ].map((item, idx) => (
                                <div key={idx} style={{ background: item.bg || '#FFF', padding: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '10px', color: '#64748B', marginBottom: '2px' }}>{item.n}</div>
                                    <div style={{ fontSize: '14px', fontWeight: '700', color: item.bg ? '#1E293B' : '#475569' }}>{item.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 발화요인별 현황 */}
                <div style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                    <div style={{ background: '#F8FAFC', padding: '10px 16px', borderBottom: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '700', color: '#475569' }}>
                        발화요인별 화재발생 현황
                    </div>
                    <div style={{ padding: '12px' }}>
                        <div style={{ display: 'flex', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
                            {[
                                { n: '합계', v: 19, w: '15%', bg: '#F1F5F9' },
                                { n: '알루미늄', v: 12, w: '30%' },
                                { n: '혼합', v: 2, w: '20%', sub: '(Al,Mg 등)' },
                                { n: '생석회', v: 4, w: '17.5%' },
                                { n: '산화칼슘', v: 1, w: '17.5%' }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    width: item.w,
                                    background: item.bg || '#FFF',
                                    padding: '8px 4px',
                                    textAlign: 'center',
                                    borderRight: idx < 4 ? '1px solid #E2E8F0' : 'none'
                                }}>
                                    <div style={{ fontSize: '10px', color: '#64748B', whiteSpace: 'nowrap' }}>{item.n}</div>
                                    {item.sub && <div style={{ fontSize: '8px', color: '#94A3B8', marginTop: '-2px' }}>{item.sub}</div>}
                                    <div style={{ fontSize: '15px', fontWeight: '800', color: item.bg ? '#1E293B' : '#EF4444', marginTop: '2px' }}>{item.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 5. 주요 화재 사례 */}
            <motion.section variants={itemVariants}>
                <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <AlertTriangle size={20} color="#F59E0B" />
                    <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#1E293B' }}>금수성 물질 화재 주요사례</h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* 사례 1: 창녕 */}
                    <div style={{ background: '#FFF', borderRadius: '20px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ background: '#F8FAFC', padding: '14px 20px', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>창녕군 산업시설 (인명피해)</span>
                            <span style={{ fontSize: '12px', color: '#64748B', background: '#E2E8F0', padding: '2px 8px', borderRadius: '4px' }}>2021. 04. 22</span>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', minWidth: '60px' }}>발생원인</span>
                                    <span style={{ fontSize: '13px', color: '#334155' }}>화학적 요인 (금수성물질의 물과 접촉 추정)</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#64748B', minWidth: '60px' }}>피해내용</span>
                                    <span style={{ fontSize: '13px', color: '#EF4444', fontWeight: '600' }}>인명피해 경상 1명 (2도 화상), 재산피해 3,949천원</span>
                                </div>
                                <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '12px', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
                                    <strong>발생개요:</strong> 알루미늄 드로스 용해로 투입 작업 중 내부에서 소규모 폭발이 발생하였고, 투입구 아래에서 작업 중이던 직원이 낙하한 불티에 의해 부상 입음
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 사례 2: 김해 */}
                    <div style={{ background: '#F0F9FF', borderRadius: '20px', border: '1px solid #BAE6FD', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div style={{ background: '#E0F2FE', padding: '14px 20px', borderBottom: '1px solid #BAE6FD', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#0369A1' }}>김해시 생림면 공장 (대규모 피해)</span>
                            <span style={{ fontSize: '12px', color: '#0369A1', background: '#BAE6FD', padding: '2px 8px', borderRadius: '4px' }}>2026. 01. 29</span>
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#0369A1', minWidth: '60px' }}>발생일시</span>
                                    <span style={{ fontSize: '13px', color: '#0369A1' }}>2026. 01. 29.(목) 18:52 ~ 02. 02.(월) 13:59 (완진)</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#0369A1', minWidth: '60px' }}>피해규모</span>
                                    <span style={{ fontSize: '13px', color: '#E11D48', fontWeight: '700' }}>공장 2개소 전소, 소방차량 2대 전소</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#0369A1', minWidth: '60px' }}>특이사항</span>
                                    <span style={{ fontSize: '13px', color: '#0369A1', fontWeight: '600' }}>최초 발화 공장에 알루미늄 300톤 적재 추정</span>
                                </div>
                                <div style={{ background: '#FFF', padding: '12px', borderRadius: '12px', fontSize: '12px', color: '#0369A1', lineHeight: '1.5', border: '1px solid #BAE6FD' }}>
                                    ※ 최근 5년간(2021~2025년) 금수성 물질 화재 총 13건 발생 중 최대 규모 피해 사례
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    )
}
