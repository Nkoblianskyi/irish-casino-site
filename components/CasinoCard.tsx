"use client"

import { Star, TrendingUp, Award } from "lucide-react"
import type { Casino } from "../data/casinos"
import Image from "next/image"

interface CasinoCardProps {
  casino: Casino
  featured?: boolean
}

export default function CasinoCard({ casino, featured = false }: CasinoCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        style={i < Math.floor(rating) ? { filter: "drop-shadow(0 0 5px #ffdd00)" } : {}}
      />
    ))
  }

  return (
    <a href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`casino-card p-4 sm:p-6 relative flex flex-col ${featured ? "neon-border-gold" : ""}`}
        style={{
          background: "rgba(10, 10, 42, 0.9)",
          border: featured ? "2px solid #ffdd00" : "2px solid #00ffff",
          boxShadow: featured
            ? "0 0 25px #ffdd00, inset 0 0 15px rgba(255, 221, 0, 0.2)"
            : "0 0 20px #00ffff, inset 0 0 10px rgba(0, 255, 255, 0.2)",
          height: "420px", // Fixed height for all cards
        }}
      >
        {casino.trending && (
          <div
            className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center"
            style={{
              border: "2px solid #ff00ff",
              boxShadow: "0 0 15px #ff00ff",
            }}
          >
            <TrendingUp size={14} className="mr-1" />🔥 Trending
          </div>
        )}

        {casino.editorsPick && (
          <div
            className="absolute -top-3 -left-3 bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-bold flex items-center"
            style={{
              border: "2px solid #ffdd00",
              boxShadow: "0 0 15px #ffdd00",
              textShadow: "0 0 10px #ffdd00",
            }}
          >
            <Award size={14} className="mr-1" />
            Editor's Pick
          </div>
        )}

        <div className="text-center flex flex-col h-full">
          {/* Logo Section - Fixed height */}
          <div className="mb-4 h-16 flex items-center justify-center">
            <Image
              src={casino.logo || "/placeholder.svg?height=60&width=120&text=" + casino.name}
              alt={casino.name}
              width={140}
              height={60}
              className="max-h-full object-contain"
            />
          </div>

          {/* Casino Name - Fixed height */}
          <div className="h-16 flex items-center justify-center mb-4">
            <h3
              className="text-lg sm:text-xl font-bold text-white font-black text-center"
              style={{
                color: "#ffffff",
                textShadow: "0 0 15px #00ffff, 2px 2px 0px #000000",
                WebkitTextStroke: "1px #00ffff",
              }}
            >
              {casino.name}
            </h3>
          </div>

          {/* Bonus Section - Fixed height */}
          <div className="h-20 mb-4 flex items-center">
            <div
              className="bg-black text-white p-3 rounded-lg w-full flex items-center justify-center"
              style={{
                border: "2px solid #00ff8c",
                boxShadow: "0 0 15px rgba(0, 255, 140, 0.5)",
                minHeight: "80px",
              }}
            >
              <p
                className="font-bold text-sm sm:text-base text-center leading-tight"
                style={{
                  color: "#00ff8c",
                  textShadow: "0 0 10px #00ff8c",
                }}
              >
                {casino.bonus}
              </p>
            </div>
          </div>

          {/* Rating Section - Fixed height */}
          <div className="h-8 flex items-center justify-center mb-6">
            <div className="flex items-center mr-2">{renderStars(casino.rating)}</div>
            <span className="text-sm text-gray-300">
              {casino.rating} ({casino.votes} votes)
            </span>
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-grow"></div>

          {/* Button Section - Fixed position at bottom */}
          <div className="mt-auto">
            <div
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 text-base rounded-full transform hover:scale-105 transition-all duration-300 mb-3 text-center"
              style={{
                border: "2px solid #ffdd00",
                boxShadow: "0 0 15px #ffdd00",
              }}
            >
              Claim Bonus 🎁
            </div>

            <p className="text-xs text-gray-300">18+ | Terms Apply | GambleAware.org</p>
          </div>
        </div>
      </div>
    </a>
  )
}
