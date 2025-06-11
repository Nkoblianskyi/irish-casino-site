import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import CasinoCard from "../components/CasinoCard"
import SpotlightSection from "../components/SpotlightSection"
import TrendingBonuses from "../components/TrendingBonuses"
import CasinoStatsSection from "../components/CasinoStatsSection"
import BonusHunterSection from "../components/BonusHunterSection"
import PaymentMethodsSection from "../components/PaymentMethodsSection"
import CasinoNewsSection from "../components/CasinoNewsSection"
import SafeGamblingSection from "../components/SafeGamblingSection"
import GameTypesSection from "../components/GameTypesSection"
import Footer from "../components/Footer"
import WelcomeModal from "../components/WelcomeModal"
import CookieBanner from "../components/CookieBanner"
import { casinos } from "../data/casinos"

export default function HomePage() {
  // Sort all casinos by rating (highest first)
  const allCasinos = [...casinos].sort((a, b) => b.rating - a.rating)

  // Get trending casinos for trending section
  const trendingCasinos = casinos.filter((casino) => casino.trending)

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection className="pt-20" />
      <WelcomeModal />
      <CookieBanner />

      {/* Top Casino Grid Section */}
      <section
        className="py-12 sm:py-16"
        data-section="top-casinos"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #1a0033 50%, #000000 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white font-black"
              style={{
                color: "#ffffff",
                textShadow: "0 0 25px #00ffff, 0 0 50px #00ffff, 3px 3px 0px #000000",
                WebkitTextStroke: "1px #00ffff",
              }}
            >
              🏆 Top Rated Irish Casinos 2025
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Our expert team has tested and ranked these casinos based on bonuses, games, safety, and player
              experience.
            </p>
          </div>

          {/* All Casinos Grid - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allCasinos.map((casino) => (
              <CasinoCard key={casino.name} casino={casino} featured={casino.featured || casino.editorsPick} />
            ))}
          </div>
        </div>
      </section>

      <SpotlightSection />
      <CasinoStatsSection />
      <BonusHunterSection />
      <TrendingBonuses />
      <PaymentMethodsSection />
      <CasinoNewsSection />
      <SafeGamblingSection />
      <GameTypesSection />
      <Footer />
    </div>
  )
}
