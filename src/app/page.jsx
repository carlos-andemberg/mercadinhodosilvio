import Link from 'next/link';
import { FaShoppingBasket, FaMapMarkedAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Banner de Boas Vindas */}
      <section 
        className="w-full bg-brand-blue text-white py-20 px-4 text-center relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Qualidade, variedade e preço de <span className="text-brand-yellow">supermercado grande</span> perto de você.
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 font-medium">
            Venha tomar um café com a gente! Temos centenas de itens esperando por você nas nossas prateleiras, com aquele atendimento nota 10 que só o Mercadinho do Silvio tem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/localizacao" 
              className="bg-brand-yellow text-brand-blue font-bold py-4 px-8 rounded-full hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-lg shadow-lg"
              aria-label="Ver nossa localização no mapa"
            >
              <FaMapMarkedAlt className="text-xl" /> Venha Fazer uma Visita
            </Link>
            <Link 
              href="/produtos" 
              className="bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-brand-blue hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-lg"
              aria-label="Ver catálogo parcial de produtos online"
            >
              <FaShoppingBasket className="text-xl" /> Espiar Catálogo Online
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques Rápidos */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4" aria-label="Nossos Destaques">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">Por que comprar no Silvio?</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Mais do que um mercadinho de bairro, oferecemos a infraestrutura que você precisa com a economia que o seu bolso merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Destaque 1: Preço */}
          <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform">💰</div>
            <h3 className="text-xl font-extrabold text-brand-blue mb-3">Preço de Atacado</h3>
            <p className="text-gray-700 leading-relaxed">Não caia em falsas promoções. Aqui o preço é justo de verdade em toda a mercearia, arroz, feijão e muito mais.</p>
          </article>

          {/* Destaque 2: Hortifruti */}
          <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform">🍎</div>
            <h3 className="text-xl font-extrabold text-brand-blue mb-3">Hortifruti Fresquinho</h3>
            <p className="text-gray-700 leading-relaxed">Recebemos frutas e verduras selecionadas constantemente. Qualidade de feira com conforto de mercado.</p>
          </article>

          {/* Destaque 3: Bebidas */}
          <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform">❄️</div>
            <h3 className="text-xl font-extrabold text-brand-blue mb-3">Bebidas Trincando</h3>
            <p className="text-gray-700 leading-relaxed">Cervejas, refrigerantes e sucos na temperatura ideal para levar direto para sua festa ou almoço.</p>
          </article>
        </div>
      </section>

    </div>
  );
}
