"use client"

import { Shield, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SafeGamblingSection() {
  const organizations = [
    { name: "GambleAware", url: "https://www.gambleaware.org" },
    { name: "GamCare", url: "https://www.gamcare.org.uk" },
    { name: "GamblingTherapy", url: "https://www.gamblingtherapy.org" },
    { name: "Gamblers Anonymous IE", url: "https://www.gamblersanonymous.ie" },
    { name: "EGBA", url: "https://www.egba.eu" },
  ]

  return (
    <section
      className="py-12 sm:py-16 text-white relative"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0a0a2a 50%, #000000 100%)",
      }}
    >
      {/* Neon grid background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 140, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 140, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full font-bold mb-4"
            style={{
              border: "2px solid #00ff8c",
              boxShadow: "0 0 20px #00ff8c",
            }}
          >
            <Shield
              className="mr-2"
              size={20}
              style={{
                filter: "drop-shadow(0 0 5px #00ff8c)",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #00ff8c, 2px 2px 0px #000000",
                WebkitTextStroke: "0.5px #00ff8c",
              }}
            >
              🔐 Safe Gambling
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white font-black"
            style={{
              color: "#ffffff",
              textShadow: "0 0 20px #00ff8c, 0 0 40px #00ff8c, 2px 2px 0px #000000",
              WebkitTextStroke: "1px #00ff8c",
            }}
          >
            We Support Safe & Responsible Gambling
          </h2>
          <p
            className="text-white max-w-3xl mx-auto text-lg"
            style={{
              textShadow: "0 0 5px #ffffff",
            }}
          >
            We only recommend licensed and responsible casinos. If you feel gambling is becoming a problem, please
            contact support organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {organizations.map((org) => (
            <div key={org.name} className="text-center">
              <Button
                variant="outline"
                className="w-full bg-black border-[#00ff8c] text-white hover:bg-[#00ff8c]/10 mb-2"
                style={{
                  border: "2px solid #00ff8c",
                  boxShadow: "0 0 15px #00ff8c",
                  textShadow: "0 0 5px #ffffff",
                }}
                asChild
              >
                <a href={org.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  {org.name}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p
            style={{
              color: "#00ff8c",
              textShadow: "0 0 10px #00ff8c, 1px 1px 0px #000000",
            }}
          >
            ✅ All recommended casinos are licensed and regulated
          </p>
        </div>
      </div>
    </section>
  )
}
