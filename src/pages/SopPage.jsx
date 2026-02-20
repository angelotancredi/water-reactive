import { motion } from 'framer-motion'
import { AlertCircle, ShieldCheck, FlameKindling, Droplets, Info, Star } from 'lucide-react'

export default function SopPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            className="sop-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ paddingBottom: '100px' }}
        >
            {/* Header Badge Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{
                    background: '#F43F5E',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontWeight: '800',
                    fontSize: '18px',
                    boxShadow: '0 4px 12px rgba(244, 63, 94, 0.3)'
                }}>
                    SOP 221
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1E293B' }}>금속화재 대응절차</h2>
            </div>

            {/* Section 1: 사고특성 및 위험요인 */}
            <motion.section variants={itemVariants} style={{ marginBottom: '24px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                    padding: '12px 16px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    borderLeft: '4px solid #64748B'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        background: '#64748B',
                        color: '#fff',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '700'
                    }}>1</div>
                    <span style={{ fontSize: '17px', fontWeight: '700', color: '#334155' }}>사고특성 및 위험요인</span>
                </div>

                <div className="info-section" style={{ padding: '20px', gap: '16px' }}>
                    {/* 1.1 */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>1.1</span>
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                            금속은 알칼리 · 알칼리토금속, 전이 · 전이후금속, 금속합금 등으로 분류한다.
                        </span>
                    </div>

                    {/* 1.2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>1.2</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                <strong>알칼리금속 :</strong> 언제든 물과 접촉 위험, 자연발화 위험이 있다.
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.2.1 알칼리금속: 리튬(Li), 나트륨(Na), 칼륨(K) 등</div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.2.2 알칼리금속 보관: 공기 중 수분과 산소를 차단하기 위하여 석유(등유) 또는 미네랄 오일 액체 내 보관</div>
                        </div>
                    </div>

                    {/* 1.3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>1.3</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                <strong>알칼리토금속 :</strong> 물과 접촉 위험, 자연발화 우려가 있다.
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.3.1 알칼리토금속: 마그네슘(Mg), 칼슘(Ca), 스트론튬(Sr), 바륨(Ba) 등</div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.3.2 마그네슘(Mg): 찬물에서는 반응성이 적으나 온수 접촉 시 위험하며 용융된 적열상태에서 물과 접촉하면 격렬히 폭발 위험</div>
                        </div>
                    </div>

                    {/* 1.4 */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>1.4</span>
                        <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                            알칼리(토)금속과 물 반응성 세기 : Mg {"<"} Ca {"<"} Sr {"<"} Ba {"<"} Li {"<"} Na {"<"} K
                        </span>
                    </div>

                    {/* 1.5 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>1.5</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                <strong>전이(후)금속 및 금속합금 :</strong> 용융된 적열상태(물질을 녹여 빨갛게 달구어진 상태)에서 물과 접촉하면 격렬히 폭발한다.
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.5.1 전이금속: 아연(Zn), 망간(Mn), 구리(Cu), 철(Fe), 코발트(Co) 등</div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.5.2 전이후금속: 알루미늄(Al), 주석(Sn) 등</div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.5.3 금속합금: 마그네슘합금(Mg alloy), 알루미늄 합금(Al alloy) 등</div>
                        </div>
                    </div>

                    {/* 1.6 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>1.6</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                금속분진 화재 폭발은 종류에 따라 기상반응<sup>1)</sup> 또는 표면반응<sup>2)</sup>에서 발생한다.
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.6.1 마그네슘(Mg), 알루미늄(Al), Mg-Al 합금은 기상반응에서 폭발</div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.6.2 철(Fe)·티타늄(Ti)·지르코늄(Zr) 분진에서는 표면반응에서 폭발</div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>1.6.3 마그네슘(Mg)은 알루미늄(Al)에 비하여 산화 반응성이 높은 이유로 폭발 발생 우려 큼</div>
                        </div>
                    </div>

                    {/* Footnotes */}
                    <div style={{
                        marginTop: '12px',
                        paddingTop: '12px',
                        borderTop: '1px solid #E2E8F0',
                        fontSize: '11px',
                        color: '#94A3B8',
                        lineHeight: '1.6',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                    }}>
                        <div>1) 기상반응: 가연성 고체가 증발하여 발생한 증기나 분해 생성 가스가 공기 중의 산소와 산화 반응하여 연소하는 현상</div>
                        <div>2) 표면반응: 가연성 고체의 표면에서 열분해 및 증발을 일으키지 않고 고온을 유지하면서 산소와 반응하여 연소하는 현상</div>
                    </div>
                </div>
            </motion.section>

            {/* Section 2: 현장대응절차 */}
            <motion.section variants={itemVariants}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                    padding: '12px 16px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    borderLeft: '4px solid #64748B'
                }}>
                    <div style={{
                        width: '24px',
                        height: '24px',
                        background: '#64748B',
                        color: '#fff',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '700'
                    }}>2</div>
                    <span style={{ fontSize: '17px', fontWeight: '700', color: '#334155' }}>현장대응절차</span>
                </div>

                <div className="info-section" style={{ padding: '20px', gap: '20px' }}>
                    {/* 2.1 - 2.4 General */}
                    {[
                        "소방대는 화재 현장 도착 시 주변의 가연성 물질과 인화성 물질을 제거하여 화재 확산을 방지한다.",
                        "소방대는 화재 진압 과정에서 발생할 수 있는 유해 화학 물질의 노출을 최소화하기 위해 적절한 장비와 공기 호흡기를 착용하고, 필요시 주기적으로 교체한다.",
                        "화재진압에 직접 참여하지 않은 인원도 유해 화학 물질에 노출 우려가 있을 시 적절한 보호장비를 착용한다.",
                        "소방대는 금속화재 진압 시 금속별 특성을 고려하여 대응한다."
                    ].map((text, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.{i + 1}</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>{text}</span>
                        </div>
                    ))}

                    {/* 2.5 Alkali Metals */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.5</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#1E293B', fontWeight: '600' }}>
                                알칼리(리튬, 나트륨, 칼륨) 금속화재 진압
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.5.1 건토, 건조사, 팽창질석 등으로 질식소화 종료 후 잔류금속을 석유 또는 미네랄 오일에 담가 공기 중 수분과 산소 차단 후 제거한다.
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.5.2 공기 중 노출 시 자연발화 및 물과 접촉하면 격렬히 폭발할 위험이 있다.
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.5.3 젖은 흙, 모래 등은 알칼리금속 표면과 반응하여 가연성 기체가 발생할 위험이 있다.
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>
                                2.5.4 알칼리금속과 물 접촉 반응성 세기 : Li {"<"} Na {"<"} K
                            </div>
                        </div>
                    </div>

                    {/* 2.6 Alkaline Earth Metals */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.6</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#1E293B', fontWeight: '600' }}>
                                알칼리토금속(마그네슘, 칼슘, 바륨) 금속화재 진압
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.6.1 건토, 건조사, 팽창질석 등으로 질식소화 후에도 장기간 고온 발화 상태 유지되므로 잔류금속 재발화에 주의한다.
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600', lineHeight: '1.6' }}>
                                2.6.2 알칼리토금속과 물 접촉 반응성 세기 : Mg {"<"} Ca {"<"} Sr {"<"} Ba
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.6.3 적열상태 마그네슘 : 물과 접촉하면 격렬히 폭발, 화재가 더욱 확대될 위험이 있다.
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.6.4 젖은 흙, 모래 등은 적열금속 표면과 반응하여 가연성 기체가 발생할 위험이 있다.
                            </div>
                        </div>
                    </div>

                    {/* 2.7 Transition Metals */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.7</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#1E293B', fontWeight: '600' }}>
                                전이(아연, 망간 등) · 전이후(알루미늄, 주석 등), 마그네슘합금 진압
                            </span>
                        </div>
                        <div style={{ marginLeft: '34px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.7.1 건토, 건조사, 팽창질석 등으로 질식 소화한다.
                            </div>
                            <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                                2.7.2 진압 후 장기간 고온 발화 상태 유지되므로 재발화에 주의한다.
                            </div>
                        </div>
                    </div>

                    {/* 2.8 - 2.10 Incident Command */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.8</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                현장지휘관은 금속화재로 발생한 유독가스 등 확산에 대비하여 인근 주민 대피령 발령을 검토한다.
                            </span>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.9</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                현장지휘관은 금속화재로 유독가스가 발생한 경우, ‘유해물질 비상대응 가이드북(Emergency Response Guidebook)’에 따른 유독가스 물질별 위험정보, 안전확보거리, 제거 기술 등의 내용을 참고하여 대응한다.
                            </span>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span style={{ color: '#94A3B8', fontWeight: '700', minWidth: '24px' }}>2.10</span>
                            <span style={{ fontSize: '14px', lineHeight: '1.6', color: '#475569', fontWeight: '500' }}>
                                현장지휘관은 화재진압 이후에도 일정 시간 동안 감시를 유지하고 필요한 경우 추가 소화 조치를 실시하도록 한다.
                            </span>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Section 3: 현장대응 유의사항 (중요) */}
            <motion.section variants={itemVariants} style={{ marginTop: '32px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '16px',
                    padding: '12px 16px',
                    background: '#FFFBEB',
                    borderRadius: '12px',
                    borderLeft: '4px solid #F59E0B'
                }}>
                    <AlertCircle size={20} color="#F59E0B" />
                    <span style={{ fontSize: '17px', fontWeight: '800', color: '#92400E', marginRight: '6px' }}>현장대응 유의사항</span>
                    <div style={{ display: 'flex', gap: '2px' }}>
                        <Star size={14} fill="#F59E0B" color="#F59E0B" />
                        <Star size={14} fill="#F59E0B" color="#F59E0B" />
                        <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    </div>
                </div>

                <div className="info-section" style={{
                    padding: '24px',
                    gap: '24px',
                    background: '#FFF',
                    border: '2px solid #FEF3C7',
                    boxShadow: '0 10px 25px rgba(245, 158, 11, 0.08)'
                }}>
                    {/* 3.1 SOP 준수 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid #F59E0B' }} />
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>금속화재 대응절차(SOP 221) 준수</span>
                        </div>
                        <ul style={{ listStyle: 'none', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                물과 접촉하면 격렬히 폭발하는 현상 발생하므로 <strong>금속별 특성을 고려하여 대응</strong>
                            </li>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                금수성 물질에 물이 접촉되지 않도록 사전 조치(건조사 활용 등) 실시
                            </li>
                        </ul>
                    </div>

                    {/* 3.2 차량배치 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid #EF4444' }} />
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>체계적이고, 안전한 작전을 위한 차량배치</span>
                        </div>
                        <ul style={{ listStyle: 'none', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                급격한 폭발 등 대비하여 소방차량은 <strong>화재 대상물과 일정한 거리를 두고 배치</strong>
                            </li>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                소방호스를 더 연장하더라도 안전한 위치에 차량 배치
                            </li>
                        </ul>
                    </div>

                    {/* 3.3 화재 전술 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid #EF4444' }} />
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>적응성 있는 소화약제 등 활용한 화재 전술 시행</span>
                        </div>
                        <ul style={{ listStyle: 'none', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                선제적으로 건조사, 팽창질석 및 굴착기 등 확보
                            </li>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                건조사, 팽창질석을 <strong>화재표면에 도포하는 방식으로 화재 진압</strong>
                            </li>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                연소확대 우려 없는 경우 안전한 범위 내에서 자연연소 하는 방안도 고려
                            </li>
                        </ul>
                    </div>

                    {/* 3.4 재발화 방지 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '2px solid #EF4444' }} />
                            <span style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>재발화 방지 조치</span>
                        </div>
                        <ul style={{ listStyle: 'none', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                초진 후에도 장기간 고온 발화 상태 유지되므로 <strong>재발화 방지 조치 철저</strong>
                            </li>
                            <li style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '-14px' }}>-</span>
                                소방력 전진배치, 기동순찰을 통한 현장 모니터링 강화
                            </li>
                        </ul>
                    </div>
                </div>

            </motion.section>
        </motion.div>
    )
}
