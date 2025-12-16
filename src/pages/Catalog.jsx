import { useState } from 'react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de Filtro + Ordenação
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    // AQUI ESTÁ A MÁGICA: Ordena de A a Z
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-2">Nossos Produtos</h2>
        <p className="text-gray-600">Confira o que há de bom no mercadinho agora mesmo.</p>
      </div>

      {/* Barra de Busca */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <input 
          type="text" 
          placeholder="Buscar produto (ex: Arroz, Detergente...)" 
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-4 top-4 text-gray-400" />
      </div>

      {/* Filtros de Categoria */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat 
                ? 'bg-brand-blue text-white shadow-md transform scale-105' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Produtos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <FaFilter className="mx-auto text-4xl text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
          <button 
            onClick={() => {setActiveCategory('Todos'); setSearchTerm('')}}
            className="mt-2 text-brand-blue font-bold hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}