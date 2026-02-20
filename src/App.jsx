import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SubPageLayout from './layouts/SubPageLayout'
import MapPage from './pages/MapPage'
import SopPage from './pages/SopPage'
import ManualPage from './pages/ManualPage'
import AnalysisPage from './pages/AnalysisPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Landing — no bottom nav */}
                <Route path="/" element={<LandingPage />} />

                {/* Sub-pages — with bottom nav + home header */}
                <Route element={<SubPageLayout />}>
                    <Route path="/map" element={<MapPage />} />
                    <Route path="/sop" element={<SopPage />} />
                    <Route path="/manual" element={<ManualPage />} />
                    <Route path="/analysis" element={<AnalysisPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
