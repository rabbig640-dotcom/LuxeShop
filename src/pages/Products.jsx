import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [filters, setFilters] = useState({
    category: categoryFilter || 'All',
    priceRange: 'All',
    rating: 'All'
  });

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const priceRanges = ['All', 'Under $100', '$100 - $300', '$300 - $500', 'Over $500'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.category !== 'All' && product.category !== filters.category) return false;
      
      if (filters.priceRange !== 'All') {
        const price = product.price;
        switch (filters.priceRange) {
          case 'Under $100': if (price >= 100) return false; break;
          case '$100 - $300': if (price < 100 || price > 300) return false; break;
          case '$300 - $500': if (price < 300 || price > 500) return false; break;
          case 'Over $500': if (price <= 500) return false; break;
        }
      }
      
      if (filters.rating !== 'All') {
        const minRating = parseInt(filters.rating);
        if (product.rating < minRating) return false;
      }
      
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 dark:text-white">
            Products
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Category Filter */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFilters(f => ({ ...f, category: cat }))}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        filters.category === cat
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range}
                      onClick={() => setFilters(f => ({ ...f, priceRange: range }))}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        filters.priceRange === range
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Rating</h3>
                <div className="space-y-2">
                  {['All', '4', '3', '2'].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setFilters(f => ({ ...f, rating }))}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        filters.rating === rating
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {rating === 'All' ? 'All Ratings' : `${rating}+ Stars`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">No products match your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}