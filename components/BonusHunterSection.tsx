"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Filter, Star, Clock, Gift } from "lucide-react"
import { casinos } from "../data/casinos"

export default function BonusHunterSection() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const bonusTypes = [
    {
      id: "welcome",
      name: "Welcome Bonuses",
      icon: <Gift size={24} />,
      count: 47,
      avgValue: "€850",
      color: "#00ffff",
    },
    {
      id: "nodep",
      name: "No Deposit",
      icon: <Star size={24} />,
      count: 23,
      avgValue: "€25",
      color: "#00ff8c",
    },
    {
      id: "freespins",
      name: "Free Spins",
      icon: <Clock size={24} />,
      count: 156,
      avgValue: "125 Spins",
      color: "#ffdd00",
    },
    {
      id: "cashback",
      name: "Cashback",
      icon: <Filter size={24} />,
      count: 34,
      avgValue: "15%",
      color: "#ff00ff",
    },
  ]

  // Створюємо живі пропозиції на основі даних з мок файлу
  const liveOffers = casinos.slice(0, 3).map((casino, index) => ({
    casino: casino.name,
    offer: casino.bonus,
    url: casino.url,
    timeLeft: index === 0 ? "2h 34m" : index === 1 ? "5h 12m" : "1h 45m",
    claimed: index === 0 ? 847 : index === 1 ? 234 : 678,
    maxClaimed: index === 0 ? 1000 : index === 1 ? 500 : 750,
    urgent: index === 0 || index === 2,
  }))

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full font-bold mb-4"
            style={{
              border: "2px solid #ffdd00",
              boxShadow: "0 0 20px #ffdd00",
            }}
          >
            <Search
              className="mr-2"
              size={20}
              style={{
                filter: "drop-shadow(0 0 5px #ffdd00)",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #ffdd00, 2px 2px 0px #000000",
                WebkitTextStroke: "0.5px #ffdd00",
              }}
            >
              🎯 Bonus Hunter Dashboard
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #ffdd00, 0 0 40px #ffdd00, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #ffdd00",
            }}
          >
            Live Bonus Tracker
          </h2>
          <p
            className="text-white max-w-3xl mx-auto"
            style={{
              textShadow: "0 0 5px #ffffff",
            }}
          >
            Track the hottest casino bonuses in real-time. Never miss a limited-time offer again!
          </p>
        </div>

        {/* Bonus Type Filters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {bonusTypes.map((type) => (
            <div
              key={type.id}
              className="text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: `2px solid ${type.color}`,
                boxShadow: `0 0 15px ${type.color}`,
              }}
              onClick={() => setSelectedFilter(type.id)}
            >
              <div
                className="mb-2 flex justify-center"
                style={{
                  color: type.color,
                  filter: `drop-shadow(0 0 5px ${type.color})`,
                }}
              >
                {type.icon}
              </div>
              <h3
                className="font-bold text-white mb-1"
                style={{
                  textShadow: `0 0 10px ${type.color}`,
                }}
              >
                {type.name}
              </h3>
              <div className="text-sm text-gray-300">
                <div>{type.count} Active</div>
                <div
                  style={{
                    color: type.color,
                    textShadow: `0 0 5px ${type.color}`,
                  }}
                >
                  Avg: {type.avgValue}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Offers */}
        <div className="space-y-4">
          <h3
            className="text-xl font-bold text-white mb-6"
            style={{
              textShadow: "0 0 15px #ff00ff",
            }}
          >
            🔥 Live Offers - Limited Time!
          </h3>
          {liveOffers.map((offer, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl"
              style={{
                background: "rgba(10, 10, 42, 0.9)",
                border: offer.urgent ? "2px solid #ff0000" : "2px solid #00ffff",
                boxShadow: offer.urgent
                  ? "0 0 20px #ff0000, inset 0 0 10px rgba(255, 0, 0, 0.2)"
                  : "0 0 15px #00ffff, inset 0 0 10px rgba(0, 255, 255, 0.2)",
              }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <h4
                      className="text-lg font-bold text-white"
                      style={{
                        textShadow: "0 0 10px #00ffff",
                      }}
                    >
                      {offer.casino}
                    </h4>
                    {offer.urgent && (
                      <span
                        className="px-2 py-1 rounded-full text-xs font-bold bg-red-500 text-white"
                        style={{
                          border: "1px solid #ff0000",
                          boxShadow: "0 0 10px #ff0000",
                        }}
                      >
                        URGENT
                      </span>
                    )}
                  </div>
                  <p
                    className="text-white mb-2"
                    style={{
                      color: "#00ff8c",
                      textShadow: "0 0 5px #00ff8c",
                    }}
                  >
                    {offer.offer}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span
                      style={{
                        color: "#ffdd00",
                        textShadow: "0 0 5px #ffdd00",
                      }}
                    >
                      ⏰ {offer.timeLeft} left
                    </span>
                    <span className="text-gray-300">
                      {offer.claimed}/{offer.maxClaimed} claimed
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${(offer.claimed / offer.maxClaimed) * 100}%`,
                        background: offer.urgent
                          ? "linear-gradient(to right, #ff0000, #ff6600)"
                          : "linear-gradient(to right, #00ff8c, #00ffff)",
                        boxShadow: offer.urgent ? "0 0 10px #ff0000" : "0 0 10px #00ff8c",
                      }}
                    ></div>
                  </div>
                </div>
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full"
                  style={{
                    border: "2px solid #ffdd00",
                    boxShadow: "0 0 15px #ffdd00",
                  }}
                  asChild
                >
                  <a href={offer.url} target="_blank" rel="noopener noreferrer">
                    Claim Now 🚀
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
