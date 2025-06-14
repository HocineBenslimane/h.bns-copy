import { Link } from 'react-router-dom'
import { Palette, Mail, Phone, MapPin, ExternalLink, Instagram, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">H.BNS</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional custom illustration services from logos to character designs. 
              Bringing your creative vision to life with quality and precision.
            </p>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">30 N Gould St Ste N, Sheridan, WY 82801 USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (307) 205-8381</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">support@h-bns.shop</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link to="/#quote" className="text-gray-300 hover:text-white transition-colors">
                  Custom Illustrations
                </Link>
              </li>
              <li>
                <Link to="/#quote" className="text-gray-300 hover:text-white transition-colors">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link to="/#quote" className="text-gray-300 hover:text-white transition-colors">
                  Character Design
                </Link>
              </li>
              <li>
                <Link to="/#quote" className="text-gray-300 hover:text-white transition-colors">
                  Book Covers
                </Link>
              </li>
              <li>
                <Link to="/#quote" className="text-gray-300 hover:text-white transition-colors">
                  Branding Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/custom-designer" className="text-gray-300 hover:text-white transition-colors">
                  Custom Designer
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a 
                  href="https://hbnsllc.gumroad.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  Gumroad Store
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Legal & Policies</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-gray-300 hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/policies" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-white transition-colors">
                  Export Restrictions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Social Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Newsletter */}
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-3">Get updates on new products and exclusive offers</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:ring-primary/20"
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white px-4"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social Media */}
            <div className="text-center lg:text-right">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <a 
                href="https://www.instagram.com/hbns_llc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-3 text-gray-300 hover:text-white transition-colors bg-gray-800 px-4 py-2.5 rounded-lg border border-gray-700 hover:border-gray-600"
              >
                <Instagram className="h-5 w-5" />
                <span>@hbns_llc</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 H.BNS LLC. All rights reserved.
            </div>
            <img src="/hbns-logo-footer.png" alt="H.BNS LLC Logo" className="h-12 w-auto opacity-80" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer