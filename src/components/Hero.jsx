import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Palette, Star, Users, Award, ArrowRight, Lightbulb, Eye, Zap, Heart, CheckCircle, Sparkles, Play, Clock, Shield, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section with Hook */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-100/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-100/50 rounded-full text-primary font-semibold text-sm border border-primary/20">
                  <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                  Trusted by 500+ Happy Clients Worldwide
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Your <span className="text-primary relative">
                    Vision
                    <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary/20 to-purple-200/40 rounded-full"></div>
                  </span> Into 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-indigo-600 animate-gradient">
                    Stunning Art
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From concept to creation, we bring your ideas to life with professional 
                  custom illustrations that captivate, inspire, and deliver results. 
                  <span className="font-semibold text-primary">24-hour response guaranteed.</span>
                </p>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">24hr Response</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                  <Shield className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">100% Satisfaction</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                  <Link to="/get-a-quote">
                    <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group border-2 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300" asChild>
                  <a href="https://www.behance.net/djawedbns" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View Our Portfolio
                  </a>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24hrs</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Free</div>
                  <div className="text-sm text-gray-600">Consultation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">Free Revisions</div>
                </div>
              </div>
            </div>

            {/* Enhanced Visual Hook - Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Unique Vision</h3>
                  <p className="text-gray-600 text-sm">Every project is crafted with your unique brand and story in mind</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Guaranteed Quality</h3>
                  <p className="text-gray-600 text-sm">Professional results with unlimited revisions until perfect</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Quick turnaround times without compromising on quality</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Support</h3>
                  <p className="text-gray-600 text-sm">Direct collaboration with experienced artists who care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              <Palette className="h-4 w-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From logos to characters, book covers to branding packages - we bring your creative vision to life with professional quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-200/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Logo Design</h3>
              <p className="text-gray-600 mb-4">Professional logos that represent your brand identity and make lasting impressions</p>
              <div className="flex items-center justify-between">
                <div className="text-blue-600 font-medium group-hover:text-blue-700">Starting at $299</div>
                <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-purple-200/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Character Design</h3>
              <p className="text-gray-600 mb-4">Unique characters for games, books, and marketing that tell your story</p>
              <div className="flex items-center justify-between">
                <div className="text-purple-600 font-medium group-hover:text-purple-700">Starting at $399</div>
                <ArrowRight className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-200/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Covers</h3>
              <p className="text-gray-600 mb-4">Eye-catching covers that sell your story and attract readers</p>
              <div className="flex items-center justify-between">
                <div className="text-green-600 font-medium group-hover:text-green-700">Starting at $249</div>
                <ArrowRight className="h-4 w-4 text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-orange-200/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Illustrations</h3>
              <p className="text-gray-600 mb-4">Bespoke artwork for any purpose or medium, tailored to your needs</p>
              <div className="flex items-center justify-between">
                <div className="text-orange-600 font-medium group-hover:text-orange-700">Starting at $199</div>
                <ArrowRight className="h-4 w-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-pink-200/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Branding Packages</h3>
              <p className="text-gray-600 mb-4">Complete visual identity solutions for your business</p>
              <div className="flex items-center justify-between">
                <div className="text-pink-600 font-medium group-hover:text-pink-700">Starting at $799</div>
                <ArrowRight className="h-4 w-4 text-pink-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-indigo-200/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Art</h3>
              <p className="text-gray-600 text-sm">Modern digital illustrations and graphics for web and print</p>
              <div className="flex items-center justify-between">
                <div className="text-indigo-600 font-medium group-hover:text-indigo-700">Starting at $149</div>
                <ArrowRight className="h-4 w-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="bg-gradient-to-r from-primary via-purple-600 to-indigo-600 text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Ready to Get Started?
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join 500+ satisfied clients who've transformed their ideas into stunning visual art. 
                Get your free consultation today and see the difference professional design makes!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 group"
                asChild
              >
                <Link to="/get-a-quote">
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-full backdrop-blur-sm"
                asChild
              >
                <a href="https://www.behance.net/djawedbns" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-5 w-5" />
                  View Portfolio
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">24hrs</div>
                <div className="text-white/80 text-sm">Response Time</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-white/80 text-sm">Consultation</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero