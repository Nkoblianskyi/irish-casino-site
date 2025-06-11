import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Shield, Eye, Lock, Users, Database, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  const dataTypes = [
    {
      icon: <Users size={32} />,
      title: "Personal Information",
      description: "Information you provide when using our services",
      examples: ["Email addresses", "Name and contact details", "Account preferences"],
      color: "#00ffff",
    },
    {
      icon: <Eye size={32} />,
      title: "Usage Data",
      description: "Information about how you use our website",
      examples: ["Pages visited", "Time spent on site", "Click patterns"],
      color: "#00ff8c",
    },
    {
      icon: <Database size={32} />,
      title: "Technical Data",
      description: "Information collected automatically by your device",
      examples: ["IP address", "Browser type", "Device information"],
      color: "#ffdd00",
    },
  ]

  const dataUses = [
    {
      title: "Service Provision",
      description: "To provide and maintain our casino review services",
      icon: "🎰",
    },
    {
      title: "Communication",
      description: "To send you updates, newsletters, and important information",
      icon: "📧",
    },
    {
      title: "Improvement",
      description: "To analyze and improve our website and services",
      icon: "📈",
    },
    {
      title: "Legal Compliance",
      description: "To comply with legal obligations and protect our rights",
      icon: "⚖️",
    },
  ]

  const userRights = [
    {
      right: "Access",
      description: "Request a copy of the personal data we hold about you",
      icon: <FileText size={24} />,
    },
    {
      right: "Rectification",
      description: "Request correction of inaccurate or incomplete data",
      icon: <Shield size={24} />,
    },
    {
      right: "Erasure",
      description: "Request deletion of your personal data in certain circumstances",
      icon: <Lock size={24} />,
    },
    {
      right: "Portability",
      description: "Request transfer of your data to another service provider",
      icon: <Database size={24} />,
    },
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
              🔒 Privacy Policy
            </h1>
            <p className="text-white max-w-3xl mx-auto text-lg">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto p-8 rounded-xl"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #00ff8c",
              boxShadow: "0 0 25px #00ff8c",
            }}
          >
            <div className="flex items-center mb-6">
              <Shield
                size={48}
                className="mr-4"
                style={{
                  color: "#00ff8c",
                  filter: "drop-shadow(0 0 10px #00ff8c)",
                }}
              />
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{
                  textShadow: "0 0 20px #00ff8c",
                }}
              >
                Our Commitment to Privacy
              </h2>
            </div>
            <div className="space-y-4 text-white">
              <p>
                IE Best Casino is committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, store, and protect your data when you
                visit our website or use our services.
              </p>
              <p>
                We comply with the General Data Protection Regulation (GDPR) and Irish data protection laws. This policy
                applies to all users of our website and services, regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data We Collect */}
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
              Information We Collect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataTypes.map((type, index) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #ff00ff",
              }}
            >
              How We Use Your Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataUses.map((use, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: "2px solid #ff00ff",
                  boxShadow: "0 0 20px #ff00ff",
                }}
              >
                <div className="text-4xl mb-4">{use.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{
                    textShadow: "0 0 10px #ff00ff",
                  }}
                >
                  {use.title}
                </h3>
                <p className="text-gray-300 text-sm">{use.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
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
              Data Security & Protection
            </h2>
          </div>

          <div
            className="max-w-4xl mx-auto p-8 rounded-xl"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ffdd00",
              boxShadow: "0 0 25px #ffdd00",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3
                  className="text-lg font-bold text-white mb-4"
                  style={{
                    textShadow: "0 0 10px #ffdd00",
                  }}
                >
                  Security Measures
                </h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 256-bit SSL encryption for all data transmission</li>
                  <li>• Secure servers with regular security updates</li>
                  <li>• Access controls and authentication systems</li>
                  <li>• Regular security audits and monitoring</li>
                  <li>• Data backup and recovery procedures</li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-white mb-4"
                  style={{
                    textShadow: "0 0 10px #ffdd00",
                  }}
                >
                  Data Retention
                </h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Personal data: Retained only as long as necessary</li>
                  <li>• Analytics data: Anonymized after 26 months</li>
                  <li>• Account data: Deleted upon request or inactivity</li>
                  <li>• Legal requirements: Retained as required by law</li>
                  <li>• Automatic deletion: Implemented where possible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              style={{
                textShadow: "0 0 20px #00ffff",
              }}
            >
              Your Privacy Rights
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Under GDPR and Irish data protection law, you have several rights regarding your personal data:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRights.map((right, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "rgba(10, 10, 42, 0.8)",
                  border: "2px solid #00ffff",
                  boxShadow: "0 0 20px #00ffff",
                }}
              >
                <div
                  className="mb-4 flex justify-center"
                  style={{
                    color: "#00ffff",
                    filter: "drop-shadow(0 0 10px #00ffff)",
                  }}
                >
                  {right.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{
                    textShadow: "0 0 10px #00ffff",
                  }}
                >
                  Right to {right.right}
                </h3>
                <p className="text-gray-300 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Parties */}
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
              Third-Party Services
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div
              className="p-6 rounded-xl"
              style={{
                background: "rgba(10, 10, 42, 0.8)",
                border: "2px solid #ff00ff",
                boxShadow: "0 0 20px #ff00ff",
              }}
            >
              <h3
                className="text-lg font-bold text-white mb-4"
                style={{
                  textShadow: "0 0 10px #ff00ff",
                }}
              >
                Analytics & Advertising
              </h3>
              <p className="text-gray-300 mb-4">
                We may use third-party analytics services to understand how our website is used. These services may
                collect information about your visits to our site and other websites.
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Google Analytics (anonymized data)</li>
                <li>• Advertising networks (for relevant ads)</li>
                <li>• Social media platforms (for sharing features)</li>
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
                Data Sharing
              </h3>
              <p className="text-gray-300 mb-4">
                We do not sell your personal data. We may share data only in these circumstances:
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• With your explicit consent</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and safety</li>
                <li>• With trusted service providers (under strict agreements)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto p-8 rounded-xl text-center"
            style={{
              background: "rgba(10, 10, 42, 0.8)",
              border: "2px solid #ffdd00",
              boxShadow: "0 0 25px #ffdd00",
            }}
          >
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{
                textShadow: "0 0 20px #ffdd00",
              }}
            >
              Policy Updates & Contact
            </h2>
            <p className="text-gray-300 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or
              legal requirements. We will notify you of any significant changes by posting the updated policy on our
              website.
            </p>
            <div className="space-y-2">
              <p
                className="text-sm"
                style={{
                  color: "#ffdd00",
                  textShadow: "0 0 5px #ffdd00",
                }}
              >
                Last Updated: January 2025
              </p>
              <p className="text-gray-400 text-sm">
                For questions about this policy or to exercise your rights, please use our website contact form.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
