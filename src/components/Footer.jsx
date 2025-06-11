import { Link } from 'react-router-dom'
import { Palette, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">H.BNS</span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional custom illustration services from logos to character designs. 
              Bringing your creative vision to life with quality and precision.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">30 N Gould St Ste N, Sheridan, WY 82801 USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+1 (307) 205-8381</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">support@h-bns.shop</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal & Policies</h3>
            <ul className="space-y-2 text-sm">
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

          {/* Logo Column - New position */}
          <div className="flex justify-end items-start">
            <img src="/hbns-logo-footer.png" alt="H.BNS LLC Logo" className="h-40 w-auto" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 H.BNS LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


