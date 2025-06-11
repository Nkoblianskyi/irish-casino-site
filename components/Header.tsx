"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "How We Rate", href: "/how-we-rate" },
    { name: "Play Safe", href: "/play-safe" },
    { name: "About", href: "/about" },
  ]

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md"
        style={{
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a href="/" className="text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity">
                <span
                  className="font-black"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 15px #00ff8c, 2px 2px 0px #000000",
                    WebkitTextStroke: "1px #00ff8c",
                  }}
                >
                  🍀 IE
                </span>
                <span
                  className="font-black"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 15px #ffdd00, 2px 2px 0px #000000",
                    WebkitTextStroke: "1px #ffdd00",
                  }}
                >
                  Best
                </span>
                <span
                  className="font-black"
                  style={{
                    color: "#ffffff",
                    textShadow: "0 0 15px #00ffff, 2px 2px 0px #000000",
                    WebkitTextStroke: "1px #00ffff",
                  }}
                >
                  Casino
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-cyan-400 transition-colors"
                  style={{
                    textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.textShadow = "0 0 10px #00ffff"
                    target.style.color = "#00ffff"
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.textShadow = "0 0 5px rgba(255, 255, 255, 0.5)"
                    target.style.color = "#ffffff"
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div
                className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                style={{
                  border: "2px solid #ff00ff",
                  boxShadow: "0 0 10px #ff00ff",
                }}
              >
                <span className="hidden sm:inline">18+ | Play Responsibly</span>
                <span className="sm:hidden">18+</span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X
                    size={24}
                    style={{
                      filter: "drop-shadow(0 0 5px #00ffff)",
                    }}
                  />
                ) : (
                  <Menu
                    size={24}
                    style={{
                      filter: "drop-shadow(0 0 5px #00ffff)",
                    }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-md pt-20">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-xl font-bold py-2"
                  style={{
                    textShadow: "0 0 10px #00ffff",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 w-full max-w-xs">
                <Button
                  className="w-full bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-bold py-3 rounded-full"
                  style={{
                    border: "2px solid #00ffff",
                    boxShadow: "0 0 15px #00ffff",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Top Casinos
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="mt-auto pt-8 text-center">
              <p
                className="text-sm text-white/70"
                style={{
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
                }}
              >
                © 2025 IEBestCasinoSites.com
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
