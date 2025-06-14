import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Palette, 
  Shirt, 
  Coffee, 
  Smartphone, 
  Upload, 
  Layers, 
  Type, 
  Image as ImageIcon,
  Bell,
  CheckCircle,
  Sparkles,
  Zap,
  Star,
  Users,
  Clock,
  Gift,
  Rocket,
  Heart,
  TrendingUp,
  Crown,
  ArrowRight,
  Play,
  Wand2,
  Paintbrush,
  MousePointer,
  Eye,
  Download,
  Share2,
  Lightbulb,
  Target,
  Infinity,
  Cpu,
  Brush,
  Palette as PaletteIcon
} from 'lucide-react'

const CustomDesigner = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [progress, setProgress] = useState(87)
  const [subscriberCount, setSubscriberCount] = useState(2847)
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSubscriberCount(prev => prev + Math.floor(Math.random() * 5))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Feature carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Entrance animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNotifyMe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setSubscriberCount(prev => prev + 1)
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  const features = [
    {
      icon: Wand2,
      title: 'AI-Powered Magic',
      description: 'Transform your ideas into stunning designs with our intelligent AI assistant',
      color: 'from-purple-500 to-pink-500',
      demo: '✨ "Create a minimalist logo for a coffee shop" → Perfect design in seconds!'
    },
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Generate professional designs 10x faster than traditional methods',
      color: 'from-yellow-400 to-orange-500',
      demo: '⚡ Average design time: 30 seconds vs 3 hours traditional'
    },
    {
      icon: Infinity,
      title: 'Unlimited Creativity',
      description: 'Endless variations and styles at your fingertips',
      color: 'from-blue-500 to-cyan-500',
      demo: '🎨 Generate 50+ variations of any design instantly'
    },
    {
      icon: Target,
      title: 'Pixel Perfect',
      description: 'Professional quality output ready for any medium',
      color: 'from-green-500 to-emerald-500',
      demo: '🎯 4K resolution, vector formats, print-ready files'
    }
  ]

  const designTypes = [
    { name: 'Logos', icon: '🎯', count: '10,000+', popular: true },
    { name: 'Business Cards', icon: '💼', count: '5,000+', popular: true },
    { name: 'Social Media', icon: '📱', count: '15,000+', popular: true },
    { name: 'Posters', icon: '🎨', count: '8,000+', popular: false },
    { name: 'Flyers', icon: '📄', count: '6,000+', popular: false },
    { name: 'Banners', icon: '🏷️', count: '4,000+', popular: false }
  ]

  const testimonials = [
    { name: 'Sarah M.', text: 'This will revolutionize my design workflow!', rating: 5 },
    { name: 'Mike R.', text: 'Can\'t wait to try the AI features!', rating: 5 },
    { name: 'Lisa K.', text: 'Finally, professional design made simple!', rating: 5 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Status Badge */}
            <div className={`inline-flex items-center space-x-3 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-300 animate-pulse">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                LAUNCHING SOON
              </Badge>
              <div className="flex items-center space-x-2 text-white/70">
                <Users className="h-4 w-4" />
                <span className="font-bold text-white">{subscriberCount.toLocaleString()}</span>
                <span>excited creators waiting</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
                Design
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
                  Revolution
                </span>
                <span className="block text-4xl md:text-6xl text-white/80">Starts Here</span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                The world's most powerful AI-driven design studio is about to change everything. 
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold">professional designs in seconds</span>, 
                not hours.
              </p>
            </div>

            {/* Progress Section */}
            <div className={`max-w-md mx-auto mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">Development Progress</span>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{progress}%</span>
                </div>
                <Progress value={progress} className="h-4 bg-white/20 mb-3">
                  <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-green-400/50"></div>
                </Progress>
                <div className="flex items-center justify-center space-x-2 text-green-300 text-sm">
                  <Rocket className="h-4 w-4 animate-bounce" />
                  <span>Final testing phase - launching this month!</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="xl" 
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-purple-500/25 transform transition-all hover:scale-105"
              >
                <Crown className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Join VIP Early Access
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl font-bold rounded-full backdrop-blur-sm"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Future</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Revolutionary features that will transform how you create
              </p>
            </div>

            {/* Interactive Feature Display */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Feature Preview */}
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${features[currentFeature].color}`}>
                          {(() => {
                            const IconComponent = features[currentFeature].icon;
                            return <IconComponent className="h-6 w-6 text-white" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{features[currentFeature].title}</h3>
                          <p className="text-white/70">{features[currentFeature].description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Demo Preview */}
                    <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-white/50 text-sm ml-4">H.BNS Design Studio</span>
                      </div>
                      <div className="text-green-400 font-mono text-sm">
                        {features[currentFeature].demo}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        index === currentFeature 
                          ? 'bg-white/20 border-2 border-white/30 scale-105' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => setCurrentFeature(index)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} ${index === currentFeature ? 'animate-pulse' : ''}`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                          <p className="text-white/70 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Design Types Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Anything</span>
              </h2>
              <p className="text-xl text-white/70">Thousands of templates and unlimited possibilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designTypes.map((type, index) => (
                <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {type.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8 text-center relative">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-white/70 mb-4">{type.count} templates</p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{subscriberCount.toLocaleString()}</span> Excited Creators
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/80 mb-3">"{testimonial.text}"</p>
                    <p className="text-white/60 font-medium">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* VIP Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-500/30 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
              <CardContent className="relative p-12 text-center">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Crown className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">Become a VIP Creator</h3>
                  <p className="text-xl text-white/80 mb-2">
                    Be the first to experience the design revolution
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
                    <div className="flex items-center space-x-1">
                      <Gift className="h-4 w-4 text-green-400" />
                      <span>50% off launch price</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span>Exclusive templates</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Crown className="h-4 w-4 text-purple-400" />
                      <span>VIP support</span>
                    </div>
                  </div>
                </div>
                
                {!isSubscribed ? (
                  <div className="space-y-6">
                    <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="Enter your email for VIP access"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-14 text-lg bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl"
                      >
                        <Crown className="mr-2 h-5 w-5" />
                        Join VIP List
                      </Button>
                    </form>
                    
                    <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{subscriberCount.toLocaleString()} joined</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Launching this month</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-3 text-green-400 text-2xl">
                      <CheckCircle className="h-10 w-10" />
                      <span className="font-bold">Welcome to the VIP list!</span>
                    </div>
                    <p className="text-white/80 text-lg">
                      🎉 You're in! Check your email for exclusive VIP perks and early access details.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Alternative */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 border-dashed">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-white mb-6">Need Custom Designs Right Now?</h3>
                <p className="text-white/70 mb-8 text-lg leading-relaxed">
                  While our revolutionary design studio is launching, our expert team can create 
                  amazing custom designs for you manually. Professional quality, personal touch.
                </p>
                <Button 
                  size="xl" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-full" 
                  asChild
                >
                  <a href="/get-a-quote">
                    <Paintbrush className="mr-3 h-6 w-6" />
                    Get Custom Design Now
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CustomDesigner