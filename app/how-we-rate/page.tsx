import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Shield, Star, DollarSign, Gamepad2, Clock, Users } from "lucide-react"

export default function HowWeRatePage() {
  const ratingCriteria = [
    {
      icon: <Shield size={48} />,
      title: "Safety & Licensing",
      weight: "25%",
      description: "Irish gambling license, SSL encryption, responsible gambling tools, player protection measures.",
      color: "#00ff8c",
    },
    {
      icon: <DollarSign size={48} />,
      title: "Bonuses & Promotions",
      weight: "20%",
      description: "Welcome bonus value, wagering requirements, ongoing promotions, VIP programs, bonus terms.",
      color: "#ffdd00",
    },
    {
      icon: <Gamepad2 size={48} />,
      title: "Game Selection",
      weight: "20%",
      description: "Number of games, software providers, live casino, mobile compatibility, game quality.",
      color: "#00ffff",
    },
    {
      icon: <Clock size={48} />,
      title: "Banking & Payouts",
      weight: "15%",
      description: "Payment methods, withdrawal speed, processing fees, minimum/maximum limits.",
      color: "#ff00ff",
    },
    {
      icon: <Users size={48} />,
      title: "Customer Support",
      weight: "10%",
      description: "24/7 availability, live chat, email response time, phone support, help quality.",
      color: "#9d00ff",
    },
    {
      icon: <Star size={48} />,
      title: "User Experience",
      weight: "10%",
      description: "Website design, mobile app, navigation, loading speed, overall usability.",
      color: "#ff6600",
    },
  ]

  const ratingProcess = [
    {
      step: "1",
      title: "Registration & Verification",
      description: "We create real accounts and complete the full verification process.",
    },
    {
      step: "2",
      title: "Deposit & Bonus Testing",
      description: "We make real deposits and test bonus claims and wagering requirements.",
    },
    {
      step: "3",
      title: "Game Testing",
      description: "We play various games across different categories and test mobile compatibility.",
    },
    {
      step: "4",
      title: "Withdrawal Testing",
      description: "We request withdrawals and measure processing times and any issues.",
    },
    {
      step: "5",
      title: "Support Evaluation",
      description: "We test customer support through various channels with real questions.",
    },
    {
      step: "6",
      title: "Final Scoring",
      description: "We compile all data and assign ratings based on our weighted criteria.",
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
                textShadow: "0 0 25px #00ff8c, 0 0 50px #00ff8c, 3px 3px 0px #000000",
                WebkitTextStroke: "1px #00ff8c",
              }}
            >
              ⭐ How We Rate Casinos
            </h1>
            <p className="text-white max-w-3xl mx-auto text-lg">
              Our comprehensive rating system ensures you get honest, unbiased reviews. Here's exactly how we test and
              score every casino.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Criteria */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #00ffff",
              }}
            >
              📊 Our Rating Criteria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratingCriteria.map((criteria, index) => (
              <div
                key={index}
                className="p-6 rounded-xl"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: `2px solid ${criteria.color}`,
                  boxShadow: `0 0 20px ${criteria.color}`,
                }}
              >
                <div
                  className="mb-4 flex justify-center"
                  style={{
                    color: criteria.color,
                    filter: `drop-shadow(0 0 10px ${criteria.color})`,
                  }}
                >
                  {criteria.icon}
                </div>
                <div className="text-center">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-2"
                    style={{
                      background: `${criteria.color}20`,
                      color: criteria.color,
                      border: `1px solid ${criteria.color}`,
                    }}
                  >
                    {criteria.weight}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{
                      textShadow: `0 0 10px ${criteria.color}`,
                    }}
                  >
                    {criteria.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{criteria.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating Process */}
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
              🔍 Our Testing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratingProcess.map((process, index) => (
              <div
                key={index}
                className="p-6 rounded-xl relative"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: "2px solid #ff00ff",
                  boxShadow: "0 0 20px #ff00ff",
                }}
              >
                <div
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  style={{
                    background: "#ff00ff",
                    color: "#000000",
                    boxShadow: "0 0 15px #ff00ff",
                  }}
                >
                  {process.step}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{
                    textShadow: "0 0 10px #ff00ff",
                  }}
                >
                  {process.title}
                </h3>
                <p className="text-gray-300 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
