import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ExternalLink, Filter } from 'lucide-react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Illustrations', 'KDP Interiors', 'Book Covers', 'Bundles', 'Mock-Up']

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
      .catch(error => console.error('Error loading products:', error))
  }, [])

  useEffect(() => {
    let results = products

    if (selectedCategory !== 'All') {
      results = results.filter(product => product.category === selectedCategory)
    }

    if (searchTerm) {
      results = results.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(results)
  }, [searchTerm, selectedCategory, products])

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Digital Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of ready-to-use digital illustrations, templates, and assets.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative max-w-lg">
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:ring-primary focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found'; 
                  }}
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {product.price}
                </div>
              </div>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{product.category}</CardDescription>
                <Button asChild className="w-full">
                  <a href={product.productLink} target="_blank" rel="noopener noreferrer">
                    View on Gumroad <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-16">
            <p className="text-xl mb-4">No products found matching your search.</p>
            <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Visit Gumroad Store */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Visit Our Complete Store</h3>
              <p className="text-gray-600 mb-6">
                Discover our full collection of digital products and get instant downloads on Gumroad.
              </p>
              <Button size="lg" asChild>
                <a href="https://hbnsllc.gumroad.com" target="_blank" rel="noopener noreferrer">
                  Visit Gumroad Store <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Products

