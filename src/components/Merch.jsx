import { Button } from '@/components/ui/button'
import { ShoppingCart, Star, Award } from 'lucide-react'

const products = [
  {
    id: 'B09VK9LL25',
    name: 'Tacos Fiesta Cinco De Mayo',
    imageUrl: 'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C81tWoQXdGtL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png',
    amazonLink: 'https://www.amazon.com/dp/B09VK9LL25',
    isAmazonChoice: true,
    rating: 4.6,
    reviews: 60,
  },
  {
    id: 'B0DK7VKV4X',
    name: 'Adults Dirty Jokes couple dancing',
    imageUrl: 'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C61unAa909pL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png',
    amazonLink: 'https://www.amazon.com/dp/B0DK7VKV4X',
    isAmazonChoice: false,
    rating: null,
    reviews: null,
  },
  {
    id: 'B0CMGMHZWR',
    name: 'Frog Art Cottagecore',
    imageUrl: 'https://m.media-amazon.com/images/I/A1dbsmzbGeL._CLa%7C2140%2C2000%7C71YzDykG5bL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
    amazonLink: 'https://www.amazon.com/dp/B0CMGMHZWR',
    isAmazonChoice: false,
    rating: 4.7,
    reviews: 10,
  },
  {
    id: 'B0FCHNP51S',
    name: 'Life is BDSM',
    imageUrl: 'https://m.media-amazon.com/images/I/B1o1VhcDoEL._CLa%7C2140%2C2000%7C71tw%2BcVmj9L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png',
    amazonLink: 'https://www.amazon.com/dp/B0FCHNP51S',
    isAmazonChoice: false,
    rating: null,
    reviews: null,
  },
  {
    id: 'B0CLM87Q7T',
    name: 'Cat Lovers',
    imageUrl: 'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C8190h0LSWCL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
    amazonLink: 'https://www.amazon.com/dp/B0CLM87Q7T',
    isAmazonChoice: false,
    rating: 5.0,
    reviews: 1,
  },
  {
    id: 'B0CK52GN8Y',
    name: 'Funny Crochet Pun',
    imageUrl: 'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C91TsDUzA5sL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png',
    amazonLink: 'https://www.amazon.com/dp/B0CK52GN8Y',
    isAmazonChoice: false,
    rating: 5.0,
    reviews: 1,
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
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-contain" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                {product.rating !== null && product.reviews !== null && (
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${product.rating >= i + 1 ? 'text-yellow-400' : product.rating >= i + 0.5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill={product.rating >= i + 1 || product.rating >= i + 0.5 ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">({product.reviews} reviews)</span>
                  </div>
                )}
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