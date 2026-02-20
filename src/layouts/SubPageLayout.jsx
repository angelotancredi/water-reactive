import { Outlet, useLocation } from 'react-router-dom'
import SubPageHeader from '../components/SubPageHeader'
import BottomNav from '../components/BottomNav'

const pageTitles = {
    '/map': '금수성물질 취급업체 현황',
    '/sop': '금속화재 대응절차',
    '/manual': '금수성물질 화재대응 매뉴얼',
    '/analysis': '데이터 허브',
}

export default function SubPageLayout() {
    const { pathname } = useLocation()
    const title = pageTitles[pathname] || ''

    return (
        <div className="subpage-layout">
            <SubPageHeader title={title} />
            <main className="subpage-content">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    )
}
