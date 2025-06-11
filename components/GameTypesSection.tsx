"use client"

import { Gamepad2, Users, Dices } from "lucide-react"

export default function GameTypesSection() {
  const gameTypes = [
    {
      icon: <Gamepad2 size={48} />,
      title: "🎰 Slots",
      description: "From classic fruit machines to modern video slots with bonus features and progressive jackpots.",
      color: "#00ffff",
    },
    {
      icon: <Users size={48} />,
      title: "🃏 Live Casino",
      description: "Real dealers, real-time action. Experience authentic casino atmosphere from your home.",
      color: "#00ff8c",
    },
    {
      icon: <Dices size={48} />,
      title: "🎲 Table Games",
      description: "Classic casino games like Blackjack, Roulette, Baccarat, and Poker with various betting limits.",
      color: "#ff00ff",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #00ffff",
            }}
          >
            🧩 Casino Game Types Explained
          </h2>
          <p
            className="text-white max-w-2xl mx-auto"
            style={{
              textShadow: "0 0 5px #ffffff",
            }}
          >
            Understanding different game types helps you choose the best casino for your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gameTypes.map((gameType, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: `2px solid ${gameType.color}`,
                boxShadow: `0 0 20px ${gameType.color}, inset 0 0 10px rgba(255, 255, 255, 0.1)`,
              }}
            >
              <div
                className="mb-4 flex justify-center"
                style={{
                  color: gameType.color,
                  filter: `drop-shadow(0 0 10px ${gameType.color})`,
                }}
              >
                {gameType.icon}
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white font-black"
                style={{
                  color: "#ffffff",
                  textShadow: `0 0 15px ${gameType.color}, 0 0 30px ${gameType.color}, 2px 2px 0px #000000`,
                  WebkitTextStroke: `1px ${gameType.color}`,
                }}
              >
                {gameType.title}
              </h3>
              <p
                className="text-white"
                style={{
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.7)",
                }}
              >
                {gameType.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
