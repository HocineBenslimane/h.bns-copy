import { useState, useEffect, useRef } from 'react'
import { X, MessageCircle, Send, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const CustomChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [currentStep, setCurrentStep] = useState('start')
  const [isTyping, setIsTyping] = useState(false)
  const [userInput, setUserInput] = useState('')
  const messagesEndRef = useRef(null)

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          id: 1,
          type: 'bot',
          text: "Hello! Welcome to H.BNS LLC! 🎨 How can I assist you today?",
          options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"]
        }])
      }, 500)
    }
  }, [isOpen, messages.length])

  const chatFlow = {
    start: {
      message: "Hello! Welcome to H.BNS LLC! 🎨 How can I assist you today?",
      options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"]
    },
    services: {
      message: "We specialize in professional custom illustrations! Our services include:\n\n🎨 Logo Design - Starting at $299\n👤 Character Design - Starting at $399\n📚 Book Covers - Starting at $249\n🖼️ Custom Illustrations - Starting at $199\n📦 Branding Packages - Starting at $799\n💻 Digital Art - Starting at $149\n\nWhat would you like to know more about?",
      options: ["Pricing Details", "Digital Products", "Get a Quote", "Back to Main"]
    },
    pricing: {
      message: "Here are our detailed starting prices:\n\n💰 Logo Design: $299+\n💰 Character Design: $399+\n💰 Book Covers: $249+\n💰 Custom Illustrations: $199+\n💰 Branding Packages: $799+\n💰 Digital Art: $149+\n\n✨ We offer:\n• Free consultation\n• 24hr response time\n• Up to 3 revision rounds included\n• Rush orders available (+50% fee)",
      options: ["Get a Quote", "Timeline Info", "Back to Main"]
    },
    timeline: {
      message: "Our project timelines:\n\n⚡ Rush (1-3 days) - +50% fee\n🚀 Standard (1-2 weeks) - Most popular\n📅 Extended (2-4 weeks)\n🕐 Flexible timeline\n\nTimelines may vary based on complexity and revision requirements.",
      options: ["Get a Quote", "Back to Pricing", "Back to Main"]
    },
    digital: {
      message: "We offer ready-to-use digital illustrations, templates, and assets including:\n\n📁 Illustrations\n📖 KDP Interiors\n📚 Book Covers\n📦 Bundles\n🖼️ Mock-Ups\n\nYou can explore our collection on our Products page or visit our complete store on Gumroad!",
      options: ["Back to Services", "Get a Quote", "Back to Main"]
    },
    support: {
      message: "Here's how you can reach us:\n\n📧 Email: support@h-bns.shop\n   (Response within 24 hours)\n📞 Phone: +1 (307) 205-8381\n   (Mon-Fri, 9 AM - 6 PM EST)\n\n🕒 Business Hours:\n• Monday - Friday: 9:00 AM - 6:00 PM EST\n• Saturday: 10:00 AM - 4:00 PM EST\n• Sunday: Closed",
      options: ["FAQ", "Contact Form", "Back to Main"]
    },
    faq: {
      message: "Our FAQ covers common questions about:\n\n❓ File formats (PNG, JPG, SVG, others on request)\n⏰ Project timelines and rush orders\n📜 Commercial licenses (included with most products)\n🔄 Revisions (up to 3 rounds included)\n💳 Payment methods (major credit cards, PayPal)\n\nYou can find detailed answers on our FAQ page!",
      options: ["Back to Support", "Get a Quote", "Back to Main"]
    },
    contact: {
      message: "You can send us a message using our contact form on the Support page. We'll get back to you within 24 hours!",
      options: ["Back to Support", "Get a Quote", "Back to Main"]
    },
    policies: {
      message: "Here's a summary of our key policies:\n\n🔄 Returns: Digital products - all sales final (except technical issues)\n💰 Refunds: Available for technical issues, duplicates, quality issues (within 14 days)\n❌ Cancellations: Custom projects - 24hr window, 50% refund before work starts\n🔒 Privacy: We only collect necessary info, never sell/share data\n\nFor full details, check our Policies & Legal pages!",
      options: ["Refund Details", "Privacy Info", "Back to Main"]
    },
    refund: {
      message: "Refund Policy Details:\n\n💻 Digital Products:\n• All sales final due to nature of digital goods\n• Refunds for technical issues, duplicates, quality issues\n• Must request within 14 days\n\n🎨 Custom Projects:\n• Can cancel within 24 hours of order\n• 50% refund if cancelled before work begins",
      options: ["Back to Policies", "Contact Support", "Back to Main"]
    },
    privacy: {
      message: "Privacy Policy Summary:\n\n🔒 What we collect: Only necessary info (contact, project details, payment)\n🎯 How we use it: Project communication and support only\n🚫 What we don't do: Sell or share personal data with third parties\n🛡️ Security: Secure payment processors, appropriate data protection",
      options: ["Back to Policies", "Contact Support", "Back to Main"]
    },
    merch: {
      message: "Check out our official H.BNS merchandise! 🛍️\n\nWe have best-selling Amazon products with various unique designs including:\n• Tacos Fiesta Cinco De Mayo\n• Frog Art Cottagecore\n• Cat Lovers\n• Funny Crochet Pun\n• And more!\n\nYou can find all our merchandise on our Merch page!",
      options: ["Back to Main", "Get a Quote", "Contact Support"]
    },
    quote: {
      message: "Great! Ready to bring your vision to life? 🎨✨\n\nOur 'Get Your Custom Quote' form includes:\n• Free consultation\n• 24-hour response time\n• No commitment required\n\nThe form asks for:\n📝 Contact information\n🎯 Project type and budget\n⏰ Preferred timeline\n💭 Detailed project description\n\nYou can find the quote form on our website. We're excited to work with you!",
      options: ["Back to Main", "Contact Support", "Services Info"]
    }
  }

  // Handle text input and smart responses
  const handleTextInput = (text) => {
    const lowerText = text.toLowerCase()
    
    // Smart keyword detection
    if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('how much')) {
      return 'pricing'
    } else if (lowerText.includes('service') || lowerText.includes('what do you do')) {
      return 'services'
    } else if (lowerText.includes('support') || lowerText.includes('help') || lowerText.includes('contact')) {
      return 'support'
    } else if (lowerText.includes('quote') || lowerText.includes('estimate')) {
      return 'quote'
    } else if (lowerText.includes('policy') || lowerText.includes('refund') || lowerText.includes('return')) {
      return 'policies'
    } else if (lowerText.includes('merch') || lowerText.includes('merchandise') || lowerText.includes('product')) {
      return 'merch'
    } else if (lowerText.includes('timeline') || lowerText.includes('how long')) {
      return 'timeline'
    } else if (lowerText.includes('faq') || lowerText.includes('question')) {
      return 'faq'
    } else if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return 'start'
    } else {
      // Default helpful response
      return 'help'
    }
  }

  const handleOptionClick = (option) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: option
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Determine next step
    let nextStep = 'start'
    
    if (option === "Services & Pricing") nextStep = 'services'
    else if (option === "Support & Contact") nextStep = 'support'
    else if (option === "Policies & Legal") nextStep = 'policies'
    else if (option === "Merchandise") nextStep = 'merch'
    else if (option === "Get a Quote") nextStep = 'quote'
    else if (option === "Pricing Details") nextStep = 'pricing'
    else if (option === "Digital Products") nextStep = 'digital'
    else if (option === "Timeline Info") nextStep = 'timeline'
    else if (option === "FAQ") nextStep = 'faq'
    else if (option === "Contact Form") nextStep = 'contact'
    else if (option === "Refund Details") nextStep = 'refund'
    else if (option === "Privacy Info") nextStep = 'privacy'
    else if (option === "Services Info") nextStep = 'services'
    else if (option === "Back to Main") nextStep = 'start'
    else if (option === "Back to Services") nextStep = 'services'
    else if (option === "Back to Support") nextStep = 'support'
    else if (option === "Back to Policies") nextStep = 'policies'
    else if (option === "Back to Pricing") nextStep = 'pricing'
    else if (option === "Contact Support") nextStep = 'support'

    // Add bot response after delay
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: chatFlow[nextStep].message,
        options: chatFlow[nextStep].options
      }
      setMessages(prev => [...prev, botResponse])
      setCurrentStep(nextStep)
    }, 1000)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!userInput.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: userInput
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Determine response based on input
    const nextStep = handleTextInput(userInput)
    setUserInput('')

    // Add bot response after delay
    setTimeout(() => {
      setIsTyping(false)
      
      let botResponse
      if (nextStep === 'help') {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: "I understand you're looking for information! Here are some things I can help you with:",
          options: ["Services & Pricing", "Support & Contact", "Policies & Legal", "Merchandise", "Get a Quote"]
        }
      } else {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: chatFlow[nextStep].message,
          options: chatFlow[nextStep].options
        }
      }
      
      setMessages(prev => [...prev, botResponse])
      setCurrentStep(nextStep)
    }, 1000)
  }

  const resetChat = () => {
    setMessages([])
    setCurrentStep('start')
    setIsTyping(false)
    setUserInput('')
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      resetChat()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🎨
              </div>
              <div>
                <h3 className="font-semibold text-sm">H.BNS Support</h3>
                <p className="text-xs opacity-90">We're here to help!</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetChat}
                className="text-white hover:bg-white/20 p-1 h-auto"
                title="Reset Chat"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="text-white hover:bg-white/20 p-1 h-auto"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-primary text-white rounded-br-md' 
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  
                  {/* Options */}
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left p-2 text-xs bg-gray-100 hover:bg-primary hover:text-white rounded-lg transition-colors duration-200 border border-gray-200"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 text-sm border-gray-300 focus:border-primary focus:ring-primary/20"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="sm"
                disabled={!userInput.trim() || isTyping}
                className="bg-primary hover:bg-primary/90 text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex items-center justify-center text-xs text-gray-500 mt-2">
              <span>Type a message or use the buttons above</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomChatBot