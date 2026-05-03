import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { products, testimonials } from '../data/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.rating >= 4.5).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTR2MTBoNHYtMTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-600 dark:text-gray-300">New Collection 2026</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  Discover Premium
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Lifestyle Products
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Explore our curated collection of high-quality products designed to elevate your everyday life. From tech gadgets to fashion essentials.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg">
                    Shop Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  View Collections
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">10K+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">500+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Products</p>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">4.8</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Avg Rating</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={products[0].image}
                    alt="Product"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                  />
                  <img
                    src={products[1].image}
                    alt="Product"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={products[2].image}
                    alt="Product"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                  />
                  <img
                    src={products[3].image}
                    alt="Product"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl" />
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="currentColor" className="text-white dark:text-gray-900">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Handpicked selection of our most popular items loved by customers worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="secondary" size="lg">
                View All Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Beauty', 'Home'].map((category, i) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  i % 4 === 0 ? 'from-primary-500/20 to-primary-700/40' :
                  i % 4 === 1 ? 'from-accent-500/20 to-accent-700/40' :
                  i % 4 === 2 ? 'from-purple-500/20 to-purple-700/40' :
                  'from-green-500/20 to-green-700/40'
                }`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-white">
                    {category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}