"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"
import { casinos } from "../data/casinos"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  // Get top 3 casinos
  const topCasinos = casinos.slice(0, 3)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="ticket-modal relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl bg-black p-4 sm:p-6 lg:p-8 text-white"
        style={{
          border: "3px solid #00ffff",
          boxShadow: `
            0 0 20px #00ffff,
            0 0 40px #ff00ff,
            0 0 60px #00ff8c,
            inset 0 0 15px rgba(0, 255, 255, 0.5)
          `,
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-[#ff00ff] transition-colors"
          style={{
            textShadow: "0 0 10px #ff00ff",
          }}
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #ffdd00, 0 0 40px #ffdd00, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #ffdd00",
            }}
          >
            Welcome to IE Best Casino!
          </h2>
          <p
            className="text-white"
            style={{
              textShadow: "0 0 5px rgba(255, 255, 255, 0.7)",
            }}
          >
            Exclusive bonuses available right now:
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {topCasinos.map((casino, index) => (
            <a
              key={casino.name}
              href={casino.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 sm:p-3 rounded-lg hover:scale-105 transition-transform duration-300"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: "2px solid #00ffff",
                boxShadow: "0 0 15px #00ffff",
              }}
            >
              <div className="w-24 h-24 flex-shrink-0 mr-4">
                <Image
                  src={casino.logo || "/placeholder.svg"}
                  alt={casino.name}
                  width={180}
                  height={90}
                  className="rounded"
                />
              </div>
              <div className="flex-grow">
                <h3
                  className="font-bold text-white"
                  style={{
                    textShadow: "0 0 10px #00ffff, 1px 1px 0px #000000",
                  }}
                >
                  {casino.name}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "#00ff8c",
                    textShadow: "0 0 5px #00ff8c",
                  }}
                >
                  {casino.bonus}
                </p>
              </div>
              <div
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm"
                style={{
                  border: "1px solid #ffdd00",
                  boxShadow: "0 0 10px #ffdd00",
                }}
              >
                Claim
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-bold px-6 py-3 rounded-full"
            style={{
              border: "2px solid #00ffff",
              boxShadow: "0 0 15px #00ffff",
            }}
          >
            View Full List
          </Button>
        </div>
      </div>
    </div>
  )
}
