import { Button } from '@/components/ui/button'
import { ShoppingCart, Star, Award } from 'lucide-react'

const products = [
  {
    id: 'B09VK9LL25',
    name: 'H.BNS T-Shirt - "Creative Flow" Design',
    description: 'Premium quality t-shirt featuring a unique "Creative Flow" design, perfect for artists and designers. Soft, comfortable, and durable.',
    imageUrl: 'https://m.media-amazon.com/images/I/61F9r2b03LL._AC_UL320_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B09VK9LL25',
    isAmazonChoice: true,
  },
  {
    id: 'B0DK7VKV4X',
    name: 'H.BNS Hoodie - "Artistic Vision" Collection',
    description: 'Cozy and stylish hoodie from the "Artistic Vision" collection. Ideal for everyday wear, showcasing your passion for art.',
    imageUrl: 'https://m.media-amazon.com/images/I/61-9s1w+2LL._AC_UL320_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0DK7VKV4X',
    isAmazonChoice: false,
  },
  {
    id: 'B0CMGMHZWR',
    name: 'H.BNS Mug - "Inspiration Brew"',
    description: 'Start your day with inspiration! This durable ceramic mug features a vibrant design, perfect for your favorite beverage.',
    imageUrl: 'https://m.media-amazon.com/images/I/61v02-vJ-LL._AC_UL320_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0CMGMHZWR',
    isAmazonChoice: false,
  },
  {
    id: 'B0FCHNP51S',
    name: 'H.BNS Phone Case - "Digital Dreamscape"',
    description: 'Protect your phone in style with this "Digital Dreamscape" phone case. Slim, protective, and visually stunning.',
    imageUrl: 'https://m.media-amazon.com/images/I/712X0-g3nPL._AC_UL320_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0FCHNP51S',
    isAmazonChoice: false,
  },
  {
    id: 'B0CLM87Q7T',
    name: 'H.BNS Tote Bag - "Creative Carryall"',
    description: 'A versatile tote bag for all your creative essentials. Durable and spacious, with an eye-catching design.',
    imageUrl: 'https://m.media-amazon.com/images/I/71-0Y2L-pLL._AC_UL320_.jpg',
    amazonLink: 'https://www.amazon.com/dp/B0CLM87Q7T',
    isAmazonChoice: false,
  },
]

const Merch = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Official H.BNS Merch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our best-selling Amazon products, designed to inspire and delight!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                {product.isAmazonChoice && (
                  <div className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                    <Award className="h-3 w-3 mr-1" /> Amazon's Choice
                  </div>
                )}
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-4 w-4 mr-2" /> View on Amazon
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Merch


