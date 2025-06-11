"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      // Show banner after a delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const acceptSettings = () => {
    // In a real implementation, this would open a settings modal
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-black"
      style={{
        borderTop: "2px solid #00ffff",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div
            className="text-white text-xs sm:text-sm lg:text-base text-center sm:text-left"
            style={{
              textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
            }}
          >
            <p>
              We use cookies to improve your experience. Read more in our{" "}
              <a
                href="#"
                className="text-[#00ffff] underline"
                style={{
                  textShadow: "0 0 5px #00ffff",
                }}
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <Button
              size="sm"
              className="bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-bold text-xs sm:text-sm flex-1 sm:flex-none"
              style={{
                border: "1px solid #00ffff",
                boxShadow: "0 0 10px #00ffff",
              }}
              onClick={acceptAll}
            >
              Accept All
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-[#ff0000] text-red-500 hover:bg-[#ff0000]/10"
              style={{
                borderColor: "#ff0000",
                boxShadow: "0 0 10px rgba(255, 0, 0, 0.3)",
                textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => (window.location.href = "/cookies-privacy")}
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
