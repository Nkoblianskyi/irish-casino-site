"use client"

import { TrendingUp, Users, DollarSign, Trophy, Clock } from "lucide-react"

export default function CasinoStatsSection() {
  const stats = [
    {
      icon: <Users size={48} />,
      number: "2.3M+",
      label: "Active Players",
      description: "Irish players trust our recommendations",
      color: "#00ffff",
    },
    {
      icon: <DollarSign size={48} />,
      number: "€45M+",
      label: "Bonuses Claimed",
      description: "Total value claimed through our site",
      color: "#00ff8c",
    },
    {
      icon: <Trophy size={48} />,
      number: "98.7%",
      label: "Success Rate",
      description: "Players satisfied with our recommendations",
      color: "#ffdd00",
    },
    {
      icon: <Clock size={48} />,
      number: "24/7",
      label: "Live Updates",
      description: "Real-time bonus tracking and verification",
      color: "#ff00ff",
    },
  ]

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a0033 25%, #330066 50%, #1a0033 75%, #000000 100%)",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full font-bold mb-4"
            style={{
              border: "2px solid #00ffff",
              boxShadow: "0 0 20px #00ffff",
            }}
          >
            <TrendingUp
              className="mr-2"
              size={20}
              style={{
                filter: "drop-shadow(0 0 5px #00ffff)",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #00ffff, 2px 2px 0px #000000",
                WebkitTextStroke: "0.5px #00ffff",
              }}
            >
              📊 Live Casino Statistics
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #00ffff",
            }}
          >
            Why Ireland Trusts Our Reviews
          </h2>
          <p
            className="text-white max-w-3xl mx-auto"
            style={{
              textShadow: "0 0 5px #ffffff",
            }}
          >
            Real numbers from real players. See why we're Ireland's most trusted casino review platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: `2px solid ${stat.color}`,
                boxShadow: `0 0 20px ${stat.color}, inset 0 0 10px rgba(255, 255, 255, 0.1)`,
              }}
            >
              <div
                className="mb-4 flex justify-center"
                style={{
                  color: stat.color,
                  filter: `drop-shadow(0 0 10px ${stat.color})`,
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl sm:text-4xl font-bold mb-2 text-white"
                style={{
                  color: "#ffffff",
                  textShadow: `0 0 15px ${stat.color}, 0 0 30px ${stat.color}, 2px 2px 0px #000000`,
                  WebkitTextStroke: `1px ${stat.color}`,
                }}
              >
                {stat.number}
              </div>
              <h3
                className="text-lg font-bold mb-2 text-white"
                style={{
                  textShadow: `0 0 10px ${stat.color}`,
                }}
              >
                {stat.label}
              </h3>
              <p
                className="text-sm text-gray-300"
                style={{
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
