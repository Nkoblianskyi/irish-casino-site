import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Cookie, Shield, Settings, Eye } from "lucide-react"

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: <Shield size={32} />,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      examples: ["Login sessions", "Security tokens", "Site preferences"],
      retention: "Session or 1 year",
      color: "#00ff8c",
    },
    {
      icon: <Eye size={32} />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Page views", "User behavior", "Traffic sources"],
      retention: "2 years",
      color: "#00ffff",
    },
    {
      icon: <Settings size={32} />,
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      examples: ["Language settings", "Display preferences", "Form data"],
      retention: "1 year",
      color: "#ffdd00",
    },
  ]

  const cookieList = [
    {
      name: "_session_id",
      purpose: "Maintains user session and login state",
      type: "Essential",
      duration: "Session",
    },
    {
      name: "_csrf_token",
      purpose: "Protects against cross-site request forgery attacks",
      type: "Essential",
      duration: "Session",
    },
    {
      name: "_analytics_id",
      purpose: "Tracks user interactions for website improvement",
      type: "Analytics",
      duration: "2 years",
    },
    {
      name: "_preferences",
      purpose: "Stores user preferences and settings",
      type: "Functional",
      duration: "1 year",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-24 pb-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white font-black"
              style={{
                color: "#ffffff",
                textShadow: "0 0 25px #00ffff, 0 0 50px #00ffff, 3px 3px 0px #000000",
                WebkitTextStroke: "1px #00ffff",
              }}
            >
              🍪 Cookie Policy
            </h1>
            <p className="text-white max-w-3xl mx-auto text-lg">
              Learn how we use cookies to improve your experience on IE Best Casino. Your privacy matters to us.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto p-8 rounded-xl"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #00ffff",
              boxShadow: "0 0 25px #00ffff",
            }}
          >
            <div className="flex items-center mb-6">
              <Cookie
                size={48}
                className="mr-4"
                style={{
                  color: "#00ffff",
                  filter: "drop-shadow(0 0 10px #00ffff)",
                }}
              />
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{
                  textShadow: "0 0 20px #00ffff",
                }}
              >
                What Are Cookies?
              </h2>
            </div>
            <div className="space-y-4 text-white">
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better browsing experience by remembering your preferences and analyzing how you use
                our site.
              </p>
              <p>
                We use cookies to ensure our website functions properly, to understand how visitors interact with our
                content, and to provide personalized experiences. All cookies we use comply with Irish and EU data
                protection regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section
        className="py-12"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #1a0033 50%, #000000 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #00ff8c",
              }}
            >
              Types of Cookies We Use
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cookieTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: `2px solid ${type.color}`,
                  boxShadow: `0 0 20px ${type.color}`,
                }}
              >
                <div
                  className="mb-4 flex justify-center"
                  style={{
                    color: type.color,
                    filter: `drop-shadow(0 0 10px ${type.color})`,
                  }}
                >
                  {type.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3 text-center"
                  style={{
                    textShadow: `0 0 10px ${type.color}`,
                  }}
                >
                  {type.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Examples:</h4>
                  <ul className="text-gray-300 text-xs space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: type.color,
                        textShadow: `0 0 5px ${type.color}`,
                      }}
                    >
                      Retention: {type.retention}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #ff00ff",
              }}
            >
              Detailed Cookie List
            </h2>
          </div>

          <div
            className="max-w-6xl mx-auto rounded-xl overflow-hidden"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ff00ff",
              boxShadow: "0 0 25px #ff00ff",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead
                  style={{
                    background: "rgba(255, 0, 255, 0.2)",
                  }}
                >
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-bold">Cookie Name</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Purpose</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Type</th>
                    <th className="px-6 py-4 text-left text-white font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieList.map((cookie, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700"
                      style={{
                        background: index % 2 === 0 ? "rgba(255, 255, 255, 0.05)" : "transparent",
                      }}
                    >
                      <td className="px-6 py-4">
                        <code
                          className="text-sm font-mono"
                          style={{
                            color: "#00ffff",
                            textShadow: "0 0 5px #00ffff",
                          }}
                        >
                          {cookie.name}
                        </code>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.purpose}</td>
                      <td className="px-6 py-4">
                        <span
                          className="px-2 py-1 rounded-full text-xs font-bold"
                          style={{
                            background:
                              cookie.type === "Essential"
                                ? "rgba(0, 255, 140, 0.2)"
                                : cookie.type === "Analytics"
                                  ? "rgba(0, 255, 255, 0.2)"
                                  : "rgba(255, 221, 0, 0.2)",
                            color:
                              cookie.type === "Essential"
                                ? "#00ff8c"
                                : cookie.type === "Analytics"
                                  ? "#00ffff"
                                  : "#ffdd00",
                            border: `1px solid ${
                              cookie.type === "Essential"
                                ? "#00ff8c"
                                : cookie.type === "Analytics"
                                  ? "#00ffff"
                                  : "#ffdd00"
                            }`,
                          }}
                        >
                          {cookie.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{cookie.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section
        className="py-12"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #330066 50%, #000000 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #ffdd00",
              }}
            >
              Managing Your Cookie Preferences
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: "2px solid #ffdd00",
                boxShadow: "0 0 20px #ffdd00",
              }}
            >
              <h3
                className="text-lg font-bold text-white mb-4"
                style={{
                  textShadow: "0 0 10px #ffdd00",
                }}
              >
                Browser Settings
              </h3>
              <p className="text-gray-300 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• View and delete existing cookies</li>
                <li>• Block cookies from specific websites</li>
                <li>• Block third-party cookies</li>
                <li>• Clear all cookies when you close your browser</li>
                <li>• Receive notifications when cookies are set</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: "2px solid #00ff8c",
                boxShadow: "0 0 20px #00ff8c",
              }}
            >
              <h3
                className="text-lg font-bold text-white mb-4"
                style={{
                  textShadow: "0 0 10px #00ff8c",
                }}
              >
                Impact of Disabling Cookies
              </h3>
              <p className="text-gray-300 mb-4">
                Please note that disabling certain cookies may affect your experience on our website:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Essential cookies: Website may not function properly</li>
                <li>• Analytics cookies: We cannot improve our services based on usage data</li>
                <li>• Functional cookies: Your preferences will not be remembered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto p-8 rounded-xl text-center"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ff00ff",
              boxShadow: "0 0 25px #ff00ff",
            }}
          >
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{
                textShadow: "0 0 20px #ff00ff",
              }}
            >
              Policy Updates
            </h2>
            <p className="text-gray-300 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal
              reasons. Any updates will be posted on this page with a revised "Last Updated" date.
            </p>
            <p
              className="text-sm"
              style={{
                color: "#ff00ff",
                textShadow: "0 0 5px #ff00ff",
              }}
            >
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
