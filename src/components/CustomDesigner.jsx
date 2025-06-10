import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
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
  CheckCircle
} from 'lucide-react'

const CustomDesigner = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNotifyMe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const products = [
    { name: 'T-Shirts', icon: Shirt, description: 'Custom printed t-shirts' },
    { name: 'Hoodies', icon: Shirt, description: 'Comfortable custom hoodies' },
    { name: 'Tank Tops', icon: Shirt, description: 'Stylish tank tops' },
    { name: 'Mugs', icon: Coffee, description: 'Personalized coffee mugs' },
    { name: 'Phone Cases', icon: Smartphone, description: 'Custom phone protection' },
    { name: 'Posters', icon: ImageIcon, description: 'High-quality prints' }
  ]

  const features = [
    {
      icon: Upload,
      title: 'Upload Your Design',
      description: 'Easily upload your own artwork or photos'
    },
    {
      icon: Layers,
      title: 'Design Tools',
      description: 'Professional editing tools and templates'
    },
    {
      icon: Type,
      title: 'Add Text',
      description: 'Custom fonts and text styling options'
    },
    {
      icon: Palette,
      title: 'Color Customization',
      description: 'Full color palette and design options'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom Product Designer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create and customize your own products with our upcoming online design tool. 
            Upload your designs or create new ones directly in your browser.
          </p>
        </div>

        {/* Preview Interface */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="text-center text-2xl">Design Studio Preview</CardTitle>
              <CardDescription className="text-center">
                Get a sneak peek at our upcoming design interface
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Design Canvas Preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Design Canvas</h3>
                  <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center space-y-4 opacity-50">
                      <Shirt className="h-16 w-16 mx-auto text-gray-400" />
                      <p className="text-gray-500">Your design will appear here</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  </div>
                </div>

                {/* Tools Preview */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Design Tools</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Upload Image', icon: Upload },
                      { name: 'Add Text', icon: Type },
                      { name: 'Choose Colors', icon: Palette },
                      { name: 'Apply Effects', icon: Layers }
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
                        <tool.icon className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-500">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Products You'll Be Able to Customize</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <product.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Notify Me Section */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Bell className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
            <p className="text-gray-600 mb-6">
              Get notified when our custom product designer launches. 
              Early subscribers will receive exclusive access and special pricing.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit">
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Thank you! We'll notify you when it's ready.</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Current Alternative */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Need Custom Products Now?</h3>
          <p className="text-gray-600 mb-6">
            While our designer tool is in development, we can create custom products for you manually.
          </p>
          <Button size="lg" asChild>
            <a href="/#quote">Request Custom Product Design</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CustomDesigner

