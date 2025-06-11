import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Shield, Clock, AlertTriangle, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlaySafePage() {
  const safetyTips = [
    {
      icon: <Clock size={32} />,
      title: "Set Time Limits",
      description: "Decide how long you'll play before you start. Use casino time limit tools.",
      color: "#00ffff",
    },
    {
      icon: <Shield size={32} />,
      title: "Set Spending Limits",
      description: "Never gamble more than you can afford to lose. Set daily/weekly limits.",
      color: "#00ff8c",
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Recognize Warning Signs",
      description: "Chasing losses, gambling when upset, or neglecting responsibilities are red flags.",
      color: "#ff00ff",
    },
  ]

  const supportOrganizations = [
    {
      name: "GambleAware Ireland",
      description: "Free, confidential support for gambling problems",
      phone: "1800 753 753",
      website: "https://www.gambleaware.ie",
      available: "24/7",
    },
    {
      name: "Gamblers Anonymous Ireland",
      description: "Support groups and meetings across Ireland",
      phone: "01 872 1133",
      website: "https://www.gamblersanonymous.ie",
      available: "Daily meetings",
    },
    {
      name: "Samaritans Ireland",
      description: "Emotional support for anyone in distress",
      phone: "116 123",
      website: "https://www.samaritans.org",
      available: "24/7 Free",
    },
  ]

  const selfExclusionSteps = [
    "Contact the casino's customer support",
    "Request self-exclusion for your chosen period",
    "Provide identification for verification",
    "Confirm exclusion via email",
    "Remove casino apps and bookmarks",
    "Consider using blocking software",
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-24 pb-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #330066 50%, #000000 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white font-black"
              style={{
                color: "#ffffff",
                textShadow: "0 0 25px #00ff8c, 0 0 50px #00ff8c, 3px 3px 0px #000000",
                WebkitTextStroke: "1px #00ff8c",
              }}
            >
              🛡️ Play Safe & Responsibly
            </h1>
            <p className="text-white max-w-3xl mx-auto text-lg">
              Gambling should be fun and entertaining. If it's not, we're here to help. Learn about responsible gambling
              and get support when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #00ffff",
              }}
            >
              💡 Essential Safety Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: `2px solid ${tip.color}`,
                  boxShadow: `0 0 20px ${tip.color}`,
                }}
              >
                <div
                  className="mb-4 flex justify-center"
                  style={{
                    color: tip.color,
                    filter: `drop-shadow(0 0 10px ${tip.color})`,
                  }}
                >
                  {tip.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{
                    textShadow: `0 0 10px ${tip.color}`,
                  }}
                >
                  {tip.title}
                </h3>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Organizations */}
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
                textShadow: "0 0 20px #ff00ff",
              }}
            >
              📞 Get Help & Support
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              If gambling is no longer fun, these organizations provide free, confidential support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOrganizations.map((org, index) => (
              <div
                key={index}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: "2px solid #ff00ff",
                  boxShadow: "0 0 20px #ff00ff",
                }}
              >
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{
                    textShadow: "0 0 10px #ff00ff",
                  }}
                >
                  {org.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{org.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2 text-[#00ff8c]" />
                    <span
                      className="font-bold"
                      style={{
                        color: "#00ff8c",
                        textShadow: "0 0 5px #00ff8c",
                      }}
                    >
                      {org.phone}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">Available: {org.available}</div>
                </div>
                <Button
                  className="w-full bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-white font-bold"
                  style={{
                    border: "2px solid #ff00ff",
                    boxShadow: "0 0 15px #ff00ff",
                  }}
                  asChild
                >
                  <a href={org.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Visit Website
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Exclusion Guide */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #ffdd00",
              }}
            >
              🚫 Self-Exclusion Guide
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Self-exclusion allows you to block access to gambling sites for a set period. Here's how to do it:
            </p>
          </div>

          <div
            className="max-w-2xl mx-auto p-6 rounded-xl"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ffdd00",
              boxShadow: "0 0 20px #ffdd00",
            }}
          >
            <ol className="space-y-4">
              {selfExclusionSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1"
                    style={{
                      background: "#ffdd00",
                      color: "#000000",
                    }}
                  >
                    {index + 1}
                  </div>
                  <span className="text-white">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
