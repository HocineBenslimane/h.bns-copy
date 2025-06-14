import ChatBot from "react-chatbotify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Products from './components/Products'
import CustomDesigner from './components/CustomDesigner'
import Support from './components/Support'
import FAQ from './components/FAQ'
import Policies from './components/Policies'
import Legal from './components/Legal'
import PaymentTerms from './components/PaymentTerms'
import QuoteForm from './components/QuoteForm'
import Merch from './components/Merch'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Clear any existing chatbot data on component mount
  useEffect(() => {
    // Clear all possible chatbot storage keys
    const keysToRemove = [
      'hbns_chat_history',
      'hbns_chat_v2', 
      'hbns_chat_v3',
      'hbns_fresh_chat',
      'rcb-chat-history',
      'rcb-settings'
    ];
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  }, []);

  // Fixed chatbot configuration - no automatic redirects
  const flow = {
    start: {
      message: "Hello! Welcome to H.BNS LLC! 🎨 How can I assist you today?",
      options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"],
      path: (params) => {
        switch (params.userInput) {
          case "Services & Pricing": return "services_menu";
          case "Support & Contact": return "support_info";
          case "Policies & Legal": return "policies_info";
          case "Merchandise": return "merch_info";
          case "Get a Quote": return "quote_info";
          default: return "clarify";
        }
      }
    },
    
    services_menu: {
      message: "We specialize in professional custom illustrations! Our services include:\n\n🎨 Logo Design - Starting at $299\n👤 Character Design - Starting at $399\n📚 Book Covers - Starting at $249\n🖼️ Custom Illustrations - Starting at $199\n📦 Branding Packages - Starting at $799\n💻 Digital Art - Starting at $149\n\nWhat would you like to know more about?",
      options: ["Pricing Details", "Digital Products", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Pricing Details": return "pricing_info";
          case "Digital Products": return "digital_info";
          case "Get a Quote": return "quote_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    pricing_info: {
      message: "Here are our detailed starting prices:\n\n💰 Logo Design: $299+\n💰 Character Design: $399+\n💰 Book Covers: $249+\n💰 Custom Illustrations: $199+\n💰 Branding Packages: $799+\n💰 Digital Art: $149+\n\n✨ We offer:\n• Free consultation\n• 24hr response time\n• Up to 3 revision rounds included\n• Rush orders available (+50% fee)",
      options: ["Get a Quote", "Timeline Info", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Get a Quote": return "quote_info";
          case "Timeline Info": return "timeline_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    timeline_info: {
      message: "Our project timelines:\n\n⚡ Rush (1-3 days) - +50% fee\n🚀 Standard (1-2 weeks) - Most popular\n📅 Extended (2-4 weeks)\n🕐 Flexible timeline\n\nTimelines may vary based on complexity and revision requirements.",
      options: ["Get a Quote", "Back to Pricing", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Get a Quote": return "quote_info";
          case "Back to Pricing": return "pricing_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    digital_info: {
      message: "We offer ready-to-use digital illustrations, templates, and assets including:\n\n📁 Illustrations\n📖 KDP Interiors\n📚 Book Covers\n📦 Bundles\n🖼️ Mock-Ups\n\nYou can explore our collection on our Products page or visit our complete store on Gumroad!",
      options: ["Back to Services", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Services": return "services_menu";
          case "Get a Quote": return "quote_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    support_info: {
      message: "Here's how you can reach us:\n\n📧 Email: support@h-bns.shop\n   (Response within 24 hours)\n📞 Phone: +1 (307) 205-8381\n   (Mon-Fri, 9 AM - 6 PM EST)\n\n🕒 Business Hours:\n• Monday - Friday: 9:00 AM - 6:00 PM EST\n• Saturday: 10:00 AM - 4:00 PM EST\n• Sunday: Closed",
      options: ["FAQ", "Contact Form", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "FAQ": return "faq_info";
          case "Contact Form": return "contact_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    faq_info: {
      message: "Our FAQ covers common questions about:\n\n❓ File formats (PNG, JPG, SVG, others on request)\n⏰ Project timelines and rush orders\n📜 Commercial licenses (included with most products)\n🔄 Revisions (up to 3 rounds included)\n💳 Payment methods (major credit cards, PayPal)\n\nYou can find detailed answers on our FAQ page!",
      options: ["Back to Support", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Support": return "support_info";
          case "Get a Quote": return "quote_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    contact_info: {
      message: "You can send us a message using our contact form on the Support page. We'll get back to you within 24 hours!",
      options: ["Back to Support", "Get a Quote", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Support": return "support_info";
          case "Get a Quote": return "quote_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    policies_info: {
      message: "Here's a summary of our key policies:\n\n🔄 Returns: Digital products - all sales final (except technical issues)\n💰 Refunds: Available for technical issues, duplicates, quality issues (within 14 days)\n❌ Cancellations: Custom projects - 24hr window, 50% refund before work starts\n🔒 Privacy: We only collect necessary info, never sell/share data\n\nFor full details, check our Policies & Legal pages!",
      options: ["Refund Details", "Privacy Info", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Refund Details": return "refund_info";
          case "Privacy Info": return "privacy_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    refund_info: {
      message: "Refund Policy Details:\n\n💻 Digital Products:\n• All sales final due to nature of digital goods\n• Refunds for technical issues, duplicates, quality issues\n• Must request within 14 days\n\n🎨 Custom Projects:\n• Can cancel within 24 hours of order\n• 50% refund if cancelled before work begins\n\nFor disputes, contact refund@h-bns.shop first!",
      options: ["Back to Policies", "Contact Support", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Policies": return "policies_info";
          case "Contact Support": return "support_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    privacy_info: {
      message: "Privacy Policy Summary:\n\n🔒 What we collect: Only necessary info (contact, project details, payment)\n🎯 How we use it: Project communication and support only\n🚫 What we don't do: Sell or share personal data with third parties\n🛡️ Security: Secure payment processors, appropriate data protection\n\nContact support@h-bns.shop for data requests!",
      options: ["Back to Policies", "Contact Support", "Main Menu"],
      path: (params) => {
        switch (params.userInput) {
          case "Back to Policies": return "policies_info";
          case "Contact Support": return "support_info";
          case "Main Menu": return "start";
          default: return "clarify";
        }
      }
    },

    merch_info: {
      message: "Check out our official H.BNS merchandise! 🛍️\n\nWe have best-selling Amazon products with various unique designs including:\n• Tacos Fiesta Cinco De Mayo\n• Frog Art Cottagecore\n• Cat Lovers\n• Funny Crochet Pun\n• And more!\n\nYou can find all our merchandise on our Merch page!",
      options: ["Main Menu", "Get a Quote", "Contact Support"],
      path: (params) => {
        switch (params.userInput) {
          case "Main Menu": return "start";
          case "Get a Quote": return "quote_info";
          case "Contact Support": return "support_info";
          default: return "clarify";
        }
      }
    },

    quote_info: {
      message: "Great! Ready to bring your vision to life? 🎨✨\n\nOur 'Get Your Custom Quote' form includes:\n• Free consultation\n• 24-hour response time\n• No commitment required\n\nThe form asks for:\n📝 Contact information\n🎯 Project type and budget\n⏰ Preferred timeline\n💭 Detailed project description\n\nYou can find the quote form on our website. We're excited to work with you!",
      options: ["Main Menu", "Contact Support", "Services Info"],
      path: (params) => {
        switch (params.userInput) {
          case "Main Menu": return "start";
          case "Contact Support": return "support_info";
          case "Services Info": return "services_menu";
          default: return "clarify";
        }
      }
    },

    clarify: {
      message: "I'm sorry, I didn't quite understand that. Could you please choose from the available options? 🤔",
      options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"],
      path: (params) => {
        switch (params.userInput) {
          case "Services & Pricing": return "services_menu";
          case "Support & Contact": return "support_info";
          case "Policies & Legal": return "policies_info";
          case "Merchandise": return "merch_info";
          case "Get a Quote": return "quote_info";
          default: return "start";
        }
      }
    }
  };

  const settings = {
    general: {
      primaryColor: "#E39A97",
      secondaryColor: "#B85340",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontSize: 13,
      showFooter: false,
      embedded: false
    },
    chatInput: {
      enabledPlaceholderText: "Ask me anything...",
      showCharacterCount: false,
      maxLength: 500
    },
    chatHistory: {
      storageKey: `hbns_clean_chat_${Date.now()}`, // Unique storage key each time
      maxEntries: 20,
      disabled: false
    },
    header: {
      title: "H.BNS Support",
      showAvatar: true,
      avatar: "🎨",
      closeChatIcon: "✕"
    },
    chatButton: {
      icon: "💬"
    },
    userBubble: {
      animate: true,
      showAvatar: false,
      backgroundColor: "#E39A97",
      color: "#FFFFFF",
      borderRadius: "16px 16px 4px 16px",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      maxWidth: "80%"
    },
    botBubble: {
      animate: true,
      showAvatar: true,
      avatar: "🎨",
      color: "#FFFFFF",
      borderRadius: "16px 16px 16px 4px",
      backgroundColor: "#E39A97",
      padding: "8px 12px",
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      maxWidth: "85%"
    },
    theme: {
      primaryColor: "#E39A97",
      secondaryColor: "#B85340",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    chatWindowStyle: {
      backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      maxHeight: "500px",
      width: "350px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      border: "1px solid rgba(227, 154, 151, 0.2)"
    },
    headerStyle: {
      background: "linear-gradient(135deg, #E39A97 0%, #B85340 100%)",
      color: "#FFFFFF",
      borderBottom: "none",
      borderRadius: "16px 16px 0 0",
      padding: "12px 16px",
      fontSize: "14px",
      fontWeight: "600"
    },
    chatInputContainerStyle: {
      backgroundColor: "#FFFFFF",
      borderTop: "1px solid #E5E7EB",
      borderRadius: "0 0 16px 16px",
      padding: "12px"
    },
    chatInputAreaStyle: {
      minHeight: 20,
      padding: "8px 12px",
      backgroundColor: "#F9FAFB",
      color: "#374151",
      fontSize: "13px",
      border: "1px solid #E5E7EB",
      borderRadius: "12px",
      resize: "none"
    },
    sendButtonStyle: {
      backgroundColor: "#E39A97",
      border: "none",
      borderRadius: "8px",
      color: "#FFFFFF",
      padding: "6px 8px",
      marginLeft: "8px"
    },
    sendButtonHoveredStyle: {
      backgroundColor: "#B85340",
      transform: "scale(1.05)"
    },
    optionsStyle: {
      color: "#E39A97",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E39A97",
      borderRadius: "12px",
      padding: "6px 12px",
      margin: "2px",
      fontSize: "12px",
      fontWeight: "500"
    },
    optionsHoveredStyle: {
      color: "#FFFFFF",
      backgroundColor: "#E39A97",
      transform: "translateY(-1px)"
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <ChatBot 
          flow={flow} 
          settings={settings}
          key={`hbns-chatbot-${Date.now()}`} // Dynamic key to force complete refresh
        />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products />} />
          <Route path="/custom-designer" element={<CustomDesigner />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/payment-terms" element={<PaymentTerms />} />
          <Route path="/get-a-quote" element={<QuoteForm />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App