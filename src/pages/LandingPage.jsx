import HeroCanvas from '../components/HeroCanvas'
import BentoGrid from '../components/BentoGrid'

export default function LandingPage() {
    return (
        <div className="landing-page">
            {/* Hero Canvas with title overlay — 60% */}
            <HeroCanvas />

            {/* Bento Grid — 30% */}
            <BentoGrid />
        </div>
    )
}
