"use client"

import { Calendar, TrendingUp, AlertCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CasinoNewsSection() {
  const news = [
    {
      type: "breaking",
      icon: <AlertCircle size={20} />,
      title: "New Irish Gambling Regulations 2025",
      excerpt: "Updated licensing requirements affect 12 major casino operators. What this means for Irish players...",
      date: "2 hours ago",
      readTime: "3 min read",
      color: "#ff0000",
    },
    {
      type: "trending",
      icon: <TrendingUp size={20} />,
      title: "Crypto Casinos Surge in Ireland",
      excerpt:
        "Bitcoin and Ethereum payments now accepted at 15+ licensed Irish casinos. Security and speed benefits...",
      date: "6 hours ago",
      readTime: "5 min read",
      color: "#00ffff",
    },
    {
      type: "award",
      icon: <Award size={20} />,
      title: "Best Irish Casino Awards 2025",
      excerpt:
        "Our annual awards ceremony reveals the top performers. Betiton takes the crown for best overall experience...",
      date: "1 day ago",
      readTime: "7 min read",
      color: "#ffdd00",
    },
    {
      type: "update",
      icon: <Calendar size={20} />,
      title: "Mobile Gaming Reaches 78% in Ireland",
      excerpt:
        "Latest statistics show mobile casino gaming dominates. Top mobile-optimized casinos and what to expect...",
      date: "2 days ago",
      readTime: "4 min read",
      color: "#00ff8c",
    },
  ]

  const quickFacts = [
    { label: "Licensed Casinos", value: "47", trend: "+3 this month" },
    { label: "Avg. Bonus Value", value: "€425", trend: "+12% vs last month" },
    { label: "New Games", value: "156", trend: "This month" },
    { label: "Player Satisfaction", value: "94.2%", trend: "+2.1% improvement" },
  ]

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0a0a2a 50%, #000000 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00ffff 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ff00ff 0%, transparent 70%)",
            animation: "pulse 6s ease-in-out infinite",
            animationDelay: "2s",
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
            <Calendar
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
              📰 Casino News & Updates
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
            Latest Irish Casino Industry News
          </h2>
          <p
            className="text-white max-w-3xl mx-auto"
            style={{
              textShadow: "0 0 5px #ffffff",
            }}
          >
            Stay informed with the latest developments, regulations, and trends in the Irish online casino market.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2 space-y-6">
            {news.map((article, index) => (
              <article
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: `2px solid ${article.color}`,
                  boxShadow: `0 0 15px ${article.color}, inset 0 0 10px rgba(255, 255, 255, 0.1)`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-full"
                    style={{
                      background: `${article.color}20`,
                      border: `1px solid ${article.color}`,
                      color: article.color,
                      filter: `drop-shadow(0 0 5px ${article.color})`,
                    }}
                  >
                    {article.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-1 rounded-full text-xs font-bold uppercase"
                        style={{
                          background: `${article.color}20`,
                          color: article.color,
                          border: `1px solid ${article.color}`,
                        }}
                      >
                        {article.type}
                      </span>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{
                        textShadow: `0 0 10px ${article.color}`,
                      }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{article.readTime}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-current hover:bg-white/10"
                        style={{
                          borderColor: article.color,
                          color: article.color,
                        }}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Facts Sidebar */}
          <div className="space-y-6">
            <div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(10, 10, 42, 0.9)",
                border: "2px solid #ff00ff",
                boxShadow: "0 0 20px #ff00ff, inset 0 0 10px rgba(255, 0, 255, 0.2)",
              }}
            >
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{
                  textShadow: "0 0 15px #ff00ff",
                }}
              >
                📊 Quick Facts
              </h3>
              <div className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-300 text-sm">{fact.label}</span>
                      <div className="text-right">
                        <div
                          className="text-lg font-bold"
                          style={{
                            color: "#ffffff",
                            textShadow: "0 0 10px #ff00ff",
                          }}
                        >
                          {fact.value}
                        </div>
                        <div
                          className="text-xs"
                          style={{
                            color: "#00ff8c",
                            textShadow: "0 0 5px #00ff8c",
                          }}
                        >
                          {fact.trend}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
