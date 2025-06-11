"use client"

import { Button } from "@/components/ui/button"
import { Award, Check, X } from "lucide-react"
import Image from "next/image"
import { casinos } from "../data/casinos"

export default function SpotlightSection() {
  // Get first casino from mock data
  const spotlightCasino = casinos[0]

  return (
    <section
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #330066 50%, #000000 100%)",
      }}
    >
      <div className="shimmer absolute inset-0 opacity-30"></div>

      {/* Neon grid lines */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "#00ffff", boxShadow: "0 0 10px #00ffff" }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: "#ff00ff", boxShadow: "0 0 10px #ff00ff" }}
        ></div>
        <div
          className="absolute top-1/3 left-0 w-full h-px"
          style={{ background: "#00ff8c", boxShadow: "0 0 10px #00ff8c" }}
        ></div>
        <div
          className="absolute top-2/3 left-0 w-full h-px"
          style={{ background: "#ffdd00", boxShadow: "0 0 10px #ffdd00" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center bg-black text-yellow-400 px-4 py-2 rounded-full font-bold mb-4"
            style={{
              border: "2px solid #ffdd00",
              boxShadow: "0 0 20px #ffdd00",
              textShadow: "0 0 10px #ffdd00",
            }}
          >
            <Award className="mr-2" size={20} />🎖 Casino Spotlight of the Month
          </div>
          <h2
            className="text-4xl font-bold mb-4 text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 25px #ffdd00, 0 0 50px #ffdd00, 3px 3px 0px #000000",
              WebkitTextStroke: "1px #ffdd00",
            }}
          >
            Featured: {spotlightCasino.name}
          </h2>
        </div>

        <div
          className="max-w-4xl mx-auto backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
          style={{
            background: "rgba(10, 10, 42, 0.8)",
            border: "2px solid #00ffff",
            boxShadow: "0 0 30px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <Image
                src={spotlightCasino.logo || "/placeholder.svg"}
                alt={spotlightCasino.name}
                width={200}
                height={100}
                className="mb-6"
              />

              <h3
                className="text-xl sm:text-2xl font-bold mb-4 text-white font-black"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 20px #00ffff, 0 0 40px #00ffff, 2px 2px 0px #000000",
                  WebkitTextStroke: "1px #00ffff",
                }}
              >
                {spotlightCasino.bonus}
              </h3>

              <p className="text-white/80 mb-6">
                {spotlightCasino.name} offers an exceptional gaming experience with over 2,000 games, lightning-fast
                payouts, and 24/7 customer support. Licensed and regulated for Irish players.
              </p>

              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full"
                style={{
                  border: "2px solid #ffdd00",
                  boxShadow: "0 0 20px #ffdd00",
                }}
                asChild
              >
                <a href={spotlightCasino.url} target="_blank" rel="noopener noreferrer">
                  Claim Exclusive Bonus 🚀
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h4
                className="text-xl font-bold mb-4 text-white"
                style={{
                  textShadow: "0 0 10px #00ffff",
                }}
              >
                Pros & Cons
              </h4>

              <div className="space-y-2">
                <div className="flex items-center" style={{ color: "#00ff8c", textShadow: "0 0 5px #00ff8c" }}>
                  <Check size={20} className="mr-2" />
                  <span>2,000+ Premium Games</span>
                </div>
                <div className="flex items-center" style={{ color: "#00ff8c", textShadow: "0 0 5px #00ff8c" }}>
                  <Check size={20} className="mr-2" />
                  <span>Instant Withdrawals</span>
                </div>
                <div className="flex items-center" style={{ color: "#00ff8c", textShadow: "0 0 5px #00ff8c" }}>
                  <Check size={20} className="mr-2" />
                  <span>Irish License & Support</span>
                </div>
                <div className="flex items-center" style={{ color: "#00ff8c", textShadow: "0 0 5px #00ff8c" }}>
                  <Check size={20} className="mr-2" />
                  <span>Mobile Optimized</span>
                </div>
                <div className="flex items-center" style={{ color: "#ff00ff", textShadow: "0 0 5px #ff00ff" }}>
                  <X size={20} className="mr-2" />
                  <span>Limited Live Chat Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
