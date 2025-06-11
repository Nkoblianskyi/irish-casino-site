"use client"

import { CreditCard, Smartphone, Bitcoin, Shield, Clock, CheckCircle } from "lucide-react"

export default function PaymentMethodsSection() {
  const paymentMethods = [
    {
      category: "Traditional",
      icon: <CreditCard size={32} />,
      methods: ["Visa", "Mastercard", "Bank Transfer", "PayPal"],
      processingTime: "1-3 days",
      fees: "Usually free",
      security: "High",
      color: "#00ffff",
    },
    {
      category: "E-Wallets",
      icon: <Smartphone size={32} />,
      methods: ["Skrill", "Neteller", "ecoPayz", "MuchBetter"],
      processingTime: "Instant",
      fees: "Low (1-2%)",
      security: "Very High",
      color: "#00ff8c",
    },
    {
      category: "Crypto",
      icon: <Bitcoin size={32} />,
      methods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin"],
      processingTime: "10-30 min",
      fees: "Very Low",
      security: "Maximum",
      color: "#ffdd00",
    },
    {
      category: "Mobile",
      icon: <Smartphone size={32} />,
      methods: ["Apple Pay", "Google Pay", "Boku", "Payforit"],
      processingTime: "Instant",
      fees: "None",
      security: "High",
      color: "#ff00ff",
    },
  ]

  const securityFeatures = [
    {
      icon: <Shield size={24} />,
      title: "256-bit SSL Encryption",
      description: "Bank-level security for all transactions",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Licensed & Regulated",
      description: "All casinos verified by Irish authorities",
    },
    {
      icon: <Clock size={24} />,
      title: "Fast Withdrawals",
      description: "Most withdrawals processed within 24 hours",
    },
  ]

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%)",
      }}
    >
      {/* Floating payment icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-4xl">💳</div>
        <div className="absolute top-40 right-32 text-3xl">📱</div>
        <div className="absolute bottom-32 left-40 text-4xl">₿</div>
        <div className="absolute bottom-20 right-20 text-3xl">🔒</div>
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
            <CreditCard
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
              💰 Payment Methods Guide
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
            Safe & Secure Payment Options
          </h2>
          <p
            className="text-white max-w-3xl mx-auto"
            style={{
              textShadow: "0 0 5px #ffffff",
            }}
          >
            Choose from a wide range of trusted payment methods. All transactions are secured and processed quickly.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: `2px solid ${method.color}`,
                boxShadow: `0 0 20px ${method.color}, inset 0 0 10px rgba(255, 255, 255, 0.1)`,
              }}
            >
              <div
                className="mb-4 flex justify-center"
                style={{
                  color: method.color,
                  filter: `drop-shadow(0 0 10px ${method.color})`,
                }}
              >
                {method.icon}
              </div>
              <h3
                className="text-lg font-bold text-white mb-3 text-center"
                style={{
                  textShadow: `0 0 10px ${method.color}`,
                }}
              >
                {method.category}
              </h3>
              <div className="space-y-2 mb-4">
                {method.methods.map((methodName, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-center py-1 px-2 rounded"
                    style={{
                      background: `${method.color}20`,
                      color: method.color,
                      border: `1px solid ${method.color}40`,
                    }}
                  >
                    {methodName}
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Processing:</span>
                  <span
                    style={{
                      color: method.color,
                      textShadow: `0 0 5px ${method.color}`,
                    }}
                  >
                    {method.processingTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Fees:</span>
                  <span
                    style={{
                      color: method.color,
                      textShadow: `0 0 5px ${method.color}`,
                    }}
                  >
                    {method.fees}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Security:</span>
                  <span
                    style={{
                      color: method.color,
                      textShadow: `0 0 5px ${method.color}`,
                    }}
                  >
                    {method.security}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div
          className="p-6 sm:p-8 rounded-2xl"
          style={{
            background: "rgba(10, 10, 42, 0.9)",
            border: "2px solid #ff00ff",
            boxShadow: "0 0 25px #ff00ff, inset 0 0 15px rgba(255, 0, 255, 0.2)",
          }}
        >
          <h3
            className="text-xl font-bold text-white mb-6 text-center"
            style={{
              textShadow: "0 0 15px #ff00ff",
            }}
          >
            🔐 Security & Trust Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="mb-3 flex justify-center"
                  style={{
                    color: "#ff00ff",
                    filter: "drop-shadow(0 0 10px #ff00ff)",
                  }}
                >
                  {feature.icon}
                </div>
                <h4
                  className="font-bold text-white mb-2"
                  style={{
                    textShadow: "0 0 10px #ff00ff",
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm text-gray-300"
                  style={{
                    textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
