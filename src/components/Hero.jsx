import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Palette, Star, Users, Award, ArrowRight, Lightbulb, MessageSquare, Paintbrush, CheckCircle, User, Mail, Phone, Clock, DollarSign, FileText, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom' // Import Link

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: '',
    timeline: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        description: '',
        timeline: ''
      })
    }, 3000)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Custom <span className="text-primary">Illustrations</span> That Tell Your Story
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional illustration services from logos to character designs. 
                  Transform your ideas into stunning visual art with H.BNS LLC.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Professional Quality</span>
                
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="https://www.behance.net/djawedbns" target="_blank" rel="noopener noreferrer">
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/payment-terms">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            {/* Enhanced Quote Request Form */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center space-x-3 text-2xl">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <span>Get Your Custom Quote</span>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  <span className="font-semibold text-primary">✨ Free consultation included!</span><br />
                  Share your vision with us and receive a detailed quote within 24 hours. 
                  No commitment required.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6" id="quote">
                    {/* Contact Information Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700 border-b border-gray-200 pb-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Contact Information</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center space-x-1">
                            <User className="h-3 w-3 text-gray-500" />
                            <span>Full Name *</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="e.g., John Smith"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center space-x-1">
                            <Mail className="h-3 w-3 text-gray-500" />
                            <span>Email Address *</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center space-x-1">
                          <Phone className="h-3 w-3 text-gray-500" />
                          <span>Phone Number</span>
                          <span className="text-xs text-gray-400">(optional)</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    {/* Project Details Section */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700 border-b border-gray-200 pb-2">
                        <Palette className="h-4 w-4 text-primary" />
                        <span>Project Details</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="projectType" className="flex items-center space-x-1">
                            <FileText className="h-3 w-3 text-gray-500" />
                            <span>Project Type *</span>
                          </Label>
                          <Select onValueChange={(value) => handleChange('projectType', value)}>
                            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                              <SelectValue placeholder="What do you need?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="logo">🎨 Logo Design</SelectItem>
                              <SelectItem value="character">👤 Character Design</SelectItem>
                              <SelectItem value="illustration">🖼️ Custom Illustration</SelectItem>
                              <SelectItem value="book-cover">📚 Book Cover</SelectItem>
                              <SelectItem value="branding">📦 Branding Package</SelectItem>
                              <SelectItem value="other">✨ Other (specify in description)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget" className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3 text-gray-500" />
                            <span>Budget Range</span>
                            <span className="text-xs text-gray-400">(helps us tailor our proposal)</span>
                          </Label>
                          <Select onValueChange={(value) => handleChange('budget', value)}>
                            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                              <SelectValue placeholder="Select your budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-500">💰 Under $500</SelectItem>
                              <SelectItem value="500-1000">💰💰 $500 - $1,000</SelectItem>
                              <SelectItem value="1000-2500">💰💰💰 $1,000 - $2,500</SelectItem>
                              <SelectItem value="2500-5000">💰💰💰💰 $2,500 - $5,000</SelectItem>
                              <SelectItem value="over-5000">💰💰💰💰💰 Over $5,000</SelectItem>
                              <SelectItem value="discuss">💬 Let's discuss</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span>Preferred Timeline</span>
                          <span className="text-xs text-gray-400">(rush orders available)</span>
                        </Label>
                        <Select onValueChange={(value) => handleChange('timeline', value)}>
                          <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rush">⚡ Rush (1-3 days) +50% fee</SelectItem>
                            <SelectItem value="standard">🚀 Standard (1-2 weeks)</SelectItem>
                            <SelectItem value="extended">📅 Extended (2-4 weeks)</SelectItem>
                            <SelectItem value="flexible">🕐 Flexible timeline</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="flex items-center space-x-1">
                          <MessageSquare className="h-3 w-3 text-gray-500" />
                          <span>Project Description *</span>
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Tell us about your vision! Include details like:
• Style preferences (realistic, cartoon, minimalist, etc.)
• Color schemes or mood
• Intended use (website, print, social media, etc.)
• Any reference images or inspiration
• Specific requirements or must-haves

The more details you provide, the better we can serve you!"
                          value={formData.description}
                          onChange={(e) => handleChange('description', e.target.value)}
                          rows={6}
                          className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                          required
                        />
                        <p className="text-xs text-gray-500 flex items-center space-x-1">
                          <Lightbulb className="h-3 w-3" />
                          <span>Pro tip: The more details you share, the more accurate your quote will be!</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <Button type="submit" className="w-full group text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                        <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        Get My Free Quote
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-xs text-center text-gray-500 mt-3">
                        🔒 Your information is secure and will never be shared. Response within 24 hours guaranteed.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Quote Request Sent!</h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for choosing H.BNS LLC! We've received your request and will send you a detailed quote within 24 hours.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                      <Mail className="h-4 w-4" />
                      <span>Check your email for confirmation</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Custom Illustration Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to bring your unique vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 shadow-md">
              <CardContent className="space-y-4">
                <Lightbulb className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">1. Share Your Idea</h3>
                <p className="text-gray-600 text-sm">
                  Fill out our quick quote request form with details about your project, style preferences, and budget.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md">
              <CardContent className="space-y-4">
                <MessageSquare className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">2. Get a Personalized Quote</h3>
                <p className="text-gray-600 text-sm">
                  We'll review your request and send you a detailed quote and timeline within 24 hours.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md">
              <CardContent className="space-y-4">
                <Paintbrush className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">3. Illustration & Revisions</h3>
                <p className="text-gray-600 text-sm">
                  Our artists will create your custom illustration. We offer revisions to ensure your complete satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-md">
              <CardContent className="space-y-4">
                <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">4. Final Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Receive your high-quality custom illustration in your preferred format, ready for use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Illustration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we bring your vision to life with professional quality illustrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Logo Design",
                description: "Professional logos that represent your brand identity",
                icon: "🎨"
              },
              {
                title: "Character Design",
                description: "Unique characters for games, books, and marketing",
                icon: "👤"
              },
              {
                title: "Book Covers",
                description: "Eye-catching covers that sell your story",
                icon: "📚"
              },
              {
                title: "Custom Illustrations",
                description: "Bespoke artwork for any purpose or medium",
                icon: "🖼️"
              },
              {
                title: "Branding Packages",
                description: "Complete visual identity solutions",
                icon: "📦"
              },
              {
                title: "Digital Art",
                description: "Modern digital illustrations and graphics",
                icon: "💻"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

