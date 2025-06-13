import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      company: "Bloom Bakery",
      content: "H.BNS created the perfect logo for my bakery. The design perfectly captures the warmth and artisanal quality of my brand. The team was incredibly responsive and professional throughout the entire process.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Author",
      company: "Independent Publisher",
      content: "The book cover design exceeded all my expectations. It perfectly represents the story and has definitely helped with sales. The attention to detail and creative vision was outstanding.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "TechStart Inc.",
      content: "Working with H.BNS was a game-changer for our brand identity. They delivered a complete branding package that transformed how our customers perceive us. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Game Developer",
      company: "Indie Games Studio",
      content: "The character designs brought our game to life in ways we never imagined. The creativity and skill of the H.BNS team is truly exceptional. Our players love the characters!",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "E-commerce Owner",
      company: "Handmade Crafts Co.",
      content: "The custom illustrations for my product line were absolutely perfect. They helped differentiate my brand in a crowded market and my sales have increased significantly since the rebrand.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            <Star className="h-4 w-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with H.BNS LLC.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-primary/30 mb-4 mx-auto md:mx-0" />
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24hr</div>
            <div className="text-gray-600">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials