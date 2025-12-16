import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import bandeirarl from '../assets/bandeirariolargo.png';
import bandeirabr from '../assets/bandeiradobrasil.png';

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white mt-auto pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center mb-8">

        {/* Info da Esquerda */}
        <div>
          <h3 className="font-black text-brand-yellow text-xl mb-3">MERCADINHO DO SILVIO</h3>
          <div className="space-y-2 opacity-90 text-sm md:text-base">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <span>
                Trv. José Monteiro de Melo, 156<br />
                Tabuleiro do Pinto, Rio Largo - AL
              </span>
            </p>
            <div className='flex w-74 justify-between'>
              <img className='w-36 h-auto' src={bandeirarl} alt="Bandeira do Município de Rio Largo" />
              <img className='w-36 h-auto' src={bandeirabr} alt="Bandeira do Brasil" />
            </div>
          </div>
        </div>

        {/* Botão Insta da Direita */}
        <div className="md:text-right flex flex-col items-start md:items-end">
          <a
            href="https://www.instagram.com/mercadinhodosilviooficial/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#C13584] font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <FaInstagram size={24} />
            Siga no Instagram
          </a>
          <p className="text-sm opacity-70 mt-3">Ofertas exclusivas nos stories!</p>
        </div>
      </div>

      {/* Copyright e Créditos */}
      <div className="border-t border-white/10 text-center pt-6 text-sm opacity-60">
        <p className="mb-1">© 2025 Mercadinho do Silvio. Todos os direitos reservados.</p>
        <p className="mb-3">Imagens meramente ilustrativas.</p>

        <p>
          Desenvolvido por{' '}
          <a
            href="https://carlosandemberg.com.br"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:text-brand-yellow transition-colors hover:underline"
          >
            Carlos Andemberg
          </a>
        </p>
      </div>
    </footer>
  );
}