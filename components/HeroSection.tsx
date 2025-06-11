"use client"

import { Button } from "@/components/ui/button"
import { Coins, Spade, Heart, Diamond, Club } from "lucide-react"
import CasinoCard from "./CasinoCard"
import { casinos } from "../data/casinos"

interface HeroSectionProps {
  className?: string
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  // Get top 3 highest rated casinos for hero section
  const topCasinos = casinos.sort((a, b) => b.rating - a.rating).slice(0, 3)

  return (
    <section
      className={`hero-gradient min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 ${className}`}
    >
      {/* Floating background elements with neon colors */}
      <div className="absolute inset-0">
        <div className="floating-cards absolute top-20 left-10" style={{ color: "#00ffff" }}>
          <Spade size={60} />
        </div>
        <div className="floating-cards absolute top-40 right-20" style={{ color: "#ff00ff", animationDelay: "1s" }}>
          <Heart size={80} />
        </div>
        <div className="floating-cards absolute bottom-40 left-20" style={{ color: "#00ff8c", animationDelay: "2s" }}>
          <Diamond size={70} />
        </div>
        <div className="floating-cards absolute bottom-20 right-10" style={{ color: "#ffdd00", animationDelay: "3s" }}>
          <Club size={50} />
        </div>
        <div
          className="floating-cards absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ color: "#9d00ff", animationDelay: "0.5s" }}
        >
          <Coins size={120} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-8 sm:mb-12 lg:mb-16">
        {/* Dynamic Stats Bar */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <div
            className="bg-black px-4 py-2 rounded-full"
            style={{
              border: "2px solid #00ff8c",
              boxShadow: "0 0 15px #00ff8c",
            }}
          >
            <span
              style={{
                color: "#00ff8c",
                textShadow: "0 0 10px #00ff8c",
              }}
            >
              📅 Updated: {new Date().toLocaleDateString("en-IE", { month: "long", year: "numeric" })}
            </span>
          </div>
          <div
            className="bg-black px-4 py-2 rounded-full"
            style={{
              border: "2px solid #ff00ff",
              boxShadow: "0 0 15px #ff00ff",
            }}
          >
            <span
              style={{
                color: "#ff00ff",
                textShadow: "0 0 10px #ff00ff",
              }}
            >
              🎁 <span id="bonus-counter">12,847</span> people claimed bonuses this month
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
          <div
            className="text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #00ff8c, 0 0 40px #00ff8c, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #00ff8c",
            }}
          >
            Ireland's Best Casino
          </div>
          <div
            className="text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #ffdd00, 0 0 40px #ffdd00, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #ffdd00",
            }}
          >
            Bonuses 2025
          </div>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
          We test, review & rank Irish online casinos so you can claim the best rewards safely.
        </p>

        <Button
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300"
          style={{
            border: "2px solid #ffdd00",
            boxShadow: "0 0 20px #ffdd00",
          }}
          onClick={() => {
            const ratingSection = document.querySelector('[data-section="top-casinos"]')
            if (ratingSection) {
              ratingSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          }}
        >
          See Top Casino Deals 🎰
        </Button>

        {/* Add script for counter animation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          let counter = 12847;
          const counterElement = document.getElementById('bonus-counter');
          
          function updateCounter() {
            counter += Math.floor(Math.random() * 3) + 1;
            if (counterElement) {
              counterElement.textContent = counter.toLocaleString();
            }
          }
          
          // Update counter every 5-10 seconds
          setInterval(updateCounter, Math.random() * 5000 + 5000);
        })();
      `,
          }}
        />
      </div>

      {/* Top Casino Cards in Hero */}
      <div className="container mx-auto px-4 relative z-10 pb-16">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full font-bold mb-4"
            style={{
              border: "2px solid #00ffff",
              boxShadow: "0 0 20px #00ffff",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #00ffff, 2px 2px 0px #000000",
                WebkitTextStroke: "0.5px #00ffff",
              }}
            >
              ⭐ Top Rated Right Now
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {topCasinos.map((casino, index) => (
            <div
              key={casino.name}
              className="transform hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <CasinoCard casino={casino} featured={index === 0} />
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-4xl mx-auto">
          <div
            className="text-center p-4 rounded-lg"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #00ffff",
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            }}
          >
            <div
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
              style={{
                color: "#ffffff",
                textShadow: "0 0 15px #00ffff, 2px 2px 0px #000000",
                WebkitTextStroke: "1px #00ffff",
              }}
            >
              50+
            </div>
            <div className="text-sm text-gray-300">Casinos Tested</div>
          </div>

          <div
            className="text-center p-4 rounded-lg"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #00ff8c",
              boxShadow: "0 0 15px rgba(0, 255, 140, 0.5)",
            }}
          >
            <div
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
              style={{
                color: "#ffffff",
                textShadow: "0 0 15px #00ff8c, 2px 2px 0px #000000",
                WebkitTextStroke: "1px #00ff8c",
              }}
            >
              €10M+
            </div>
            <div className="text-sm text-gray-300">Bonuses Tracked</div>
          </div>

          <div
            className="text-center p-4 rounded-lg"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ff00ff",
              boxShadow: "0 0 15px rgba(255, 0, 255, 0.5)",
            }}
          >
            <div
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
              style={{
                color: "#ffffff",
                textShadow: "0 0 15px #ff00ff, 2px 2px 0px #000000",
                WebkitTextStroke: "1px #ff00ff",
              }}
            >
              24/7
            </div>
            <div className="text-sm text-gray-300">Updates</div>
          </div>

          <div
            className="text-center p-4 rounded-lg"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ffdd00",
              boxShadow: "0 0 15px rgba(255, 221, 0, 0.5)",
            }}
          >
            <div
              className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
              style={{
                color: "#ffffff",
                textShadow: "0 0 15px #ffdd00, 2px 2px 0px #000000",
                WebkitTextStroke: "1px #ffdd00",
              }}
            >
              100%
            </div>
            <div className="text-sm text-gray-300">Safe & Licensed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
