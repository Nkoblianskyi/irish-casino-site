import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Users, Award, Shield, Target, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const achievements = [
    {
      icon: <Award size={32} />,
      title: "Industry Recognition",
      description: "Winner of 'Best Casino Review Site' 2024",
      color: "#ffdd00",
    },
    {
      icon: <Users size={32} />,
      title: "Trusted by Players",
      description: "Over 2.3M Irish players use our reviews",
      color: "#00ffff",
    },
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description: "100% of recommended casinos are licensed",
      color: "#00ff8c",
    },
  ]

  const values = [
    "Complete transparency in all reviews",
    "Real money testing of every casino",
    "Independent and unbiased ratings",
    "Player safety above all else",
    "Regular updates and monitoring",
    "Free access to all information",
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
              🍀 About IE Best Casino
            </h1>
            <p className="text-white max-w-3xl mx-auto text-lg">
              Ireland's most trusted casino review platform. We've been helping Irish players find safe, fair, and
              rewarding online casinos since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #00ff8c",
              }}
            >
              🎯 Our Mission
            </h2>
          </div>

          <div
            className="max-w-4xl mx-auto p-8 rounded-xl text-center"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #00ff8c",
              boxShadow: "0 0 25px #00ff8c",
            }}
          >
            <Target
              size={48}
              className="mx-auto mb-6"
              style={{
                color: "#00ff8c",
                filter: "drop-shadow(0 0 10px #00ff8c)",
              }}
            />
            <p className="text-white text-lg leading-relaxed">
              To provide Irish players with honest, comprehensive casino reviews that prioritize safety, fairness, and
              value. We test every casino with real money, verify all bonuses, and ensure every recommendation meets the
              highest standards of player protection and entertainment value.
            </p>
          </div>
        </div>
      </section>


      {/* Achievements */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #ffdd00",
              }}
            >
              🏆 Our Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: `2px solid ${achievement.color}`,
                  boxShadow: `0 0 20px ${achievement.color}`,
                }}
              >
                <div
                  className="mb-4 flex justify-center"
                  style={{
                    color: achievement.color,
                    filter: `drop-shadow(0 0 10px ${achievement.color})`,
                  }}
                >
                  {achievement.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{
                    textShadow: `0 0 10px ${achievement.color}`,
                  }}
                >
                  {achievement.title}
                </h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                textShadow: "0 0 20px #00ffff",
              }}
            >
              💎 Our Values
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg"
                  style={{
                    background: "rgba(10, 10, 42, 0.8)",
                    border: "2px solid #00ffff",
                    boxShadow: "0 0 15px #00ffff",
                  }}
                >
                  <CheckCircle
                    size={24}
                    className="mr-4"
                    style={{
                      color: "#00ff8c",
                      filter: "drop-shadow(0 0 5px #00ff8c)",
                    }}
                  />
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
