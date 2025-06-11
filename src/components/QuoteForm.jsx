import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Palette, Star, Users, Award, ArrowRight, Lightbulb, MessageSquare, Paintbrush, CheckCircle, User, Mail, Phone, Clock, DollarSign, FileText, Sparkles } from 'lucide-react'

const QuoteForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default React form submission

    // Create a new FormData object from the current form data
    const form = e.target;
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Append the Netlify form-name for identification
    formDataToSend.append("form-name", "quote-request");

    // Submit the form to Netlify
       try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend).toString(),
      });
      console.log("Form successfully submitted to Netlify!");
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          description: "",
          timeline: "",
        });
      }, 3000);    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again later.");
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
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
            <form onSubmit={handleSubmit} className="space-y-6" id="quote" name="quote-request" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              {/* Hidden field for Netlify */}
              <input type="hidden" name="form-name" value="quote-request" />
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </div>
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
                      name="name"
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
                      name="email"
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
                    name="phone"
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
                    <Select name="projectType" onValueChange={(value) => handleChange('projectType', value)}>
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
                    {/* Hidden input for Netlify form submission */}
                    <input type="hidden" name="projectType" value={formData.projectType} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3 text-gray-500" />
                      <span>Budget Range</span>
                      <span className="text-xs text-gray-400">(helps us tailor our proposal)</span>
                    </Label>
                    <Select name="budget" onValueChange={(value) => handleChange('budget', value)}>
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
                    {/* Hidden input for Netlify form submission */}
                    <input type="hidden" name="budget" value={formData.budget} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span>Preferred Timeline</span>
                    <span className="text-xs text-gray-400">(rush orders available)</span>
                  </Label>
                  <Select name="timeline" onValueChange={(value) => handleChange('timeline', value)}>
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
                  {/* Hidden input for Netlify form submission */}
                  <input type="hidden" name="timeline" value={formData.timeline} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="flex items-center space-x-1">
                    <MessageSquare className="h-3 w-3 text-gray-500" />
                    <span>Project Description *</span>
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
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
                <Button type="submit" className="w-full group text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get My Free Quote
                  <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Your information is safe with us. We never share your data.</span>
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <CheckCircle className="h-20 w-20 text-green-500 mx-auto animate-bounce" />
              <h3 className="text-2xl font-semibold text-gray-800">Thank You for Your Request!</h3>
              <p className="text-gray-600">We've received your custom illustration request and will get back to you within 24 hours with a detailed quote.</p>
              <p className="text-gray-600">In the meantime, feel free to explore more of our work or contact us directly if you have any urgent questions.</p>
              <Button onClick={() => setIsSubmitted(false)} className="mt-6">Submit Another Request</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default QuoteForm


