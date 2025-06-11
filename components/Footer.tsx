"use client"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 relative">
      {/* Neon border at the top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(to right, #00ffff, #00ff8c, #ff00ff)",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="text-xl sm:text-2xl font-bold mb-4">
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
            </div>
            <p
              className="text-gray-300"
              style={{
                textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
              }}
            >
              Ireland's most trusted casino review site. We test and rank online casinos to help you play safely.
            </p>
          </div>

          <div>
            <h4
              className="font-bold mb-4"
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #00ffff, 1px 1px 0px #000000",
                WebkitTextStroke: "0.5px #00ffff",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "How We Rate", href: "/how-we-rate" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#00ffff] transition-colors"
                    style={{
                      textShadow: "0 0 3px rgba(255, 255, 255, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.textShadow = "0 0 10px #00ffff"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.textShadow = "0 0 3px rgba(255, 255, 255, 0.3)"
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold mb-4"
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #ff00ff, 1px 1px 0px #000000",
                WebkitTextStroke: "0.5px #ff00ff",
              }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Cookie Policy", href: "/cookie-policy" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Play Safe", href: "/play-safe" },
                { name: "About", href: "/about" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#ff00ff] transition-colors"
                    style={{
                      textShadow: "0 0 3px rgba(255, 255, 255, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement
                      target.style.textShadow = "0 0 10px #ff00ff"
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement
                      target.style.textShadow = "0 0 3px rgba(255, 255, 255, 0.3)"
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold mb-4"
              style={{
                color: "#ffffff",
                textShadow: "0 0 10px #00ff8c, 1px 1px 0px #000000",
                WebkitTextStroke: "0.5px #00ff8c",
              }}
            >
              Support Organizations
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  name: "GambleAware",
                  logo: "/gamble.webp",
                  url: "https://www.gambleaware.org",
                },
                {
                  name: "GamCare",
                  logo: "/gamecare.svg",
                  url: "https://www.gamcare.org.uk",
                },
                {
                  name: "GamblingTherapy",
                  logo: "/gordon.png",
                  url: "https://www.gamblingtherapy.org",
                },
                { name: "EGBA", logo: "/egba.png", url: "https://www.egba.eu" },
              ].map((org) => (
                <a
                  key={org.name}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded text-center hover:scale-105 transition-transform duration-300"
                  style={{
                    border: "1px solid #00ff8c",
                    boxShadow: "0 0 10px #00ff8c",
                  }}
                >
                  <img
                    src={org.logo || "/placeholder.svg"}
                    alt={org.name}
                    className="w-full h-6 object-contain mb-1"
                  />
                  <div
                    className="text-xs text-black"
                    style={{
                      textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {org.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t pt-8"
          style={{
            borderColor: "rgba(0, 255, 255, 0.3)",
          }}
        >
          <div className="text-center space-y-2 sm:space-y-4">
            <p
              className="font-bold"
              style={{
                color: "#ff00ff",
                textShadow: "0 0 10px #ff00ff, 1px 1px 0px #000000",
              }}
            >
              ⚠️ Gambling can be addictive. Always play responsibly. This site is for 18+ only.
            </p>
            <p
              className="text-sm"
              style={{
                color: "#ffffff",
                textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
              }}
            >
              This site is funded by affiliate partnerships. Reviews remain independent and data-driven.
            </p>
            <p
              className="text-xs"
              style={{
                color: "#ffffff",
                textShadow: "0 0 3px rgba(255, 255, 255, 0.3)",
              }}
            >
              © 2025 IEBestCasinoSites.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
