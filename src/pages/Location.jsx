import { FaMapMarkerAlt, FaClock, FaCar } from 'react-icons/fa';

export function Location() {
  // Link de busca otimizado para achar o PINO do comércio, não só a rua
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Mercadinho+do+Silvio+Tabuleiro+do+Pinto+Rio+Largo";

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-blue mb-2">Venha nos visitar</h2>
        <p className="text-gray-600">Estamos esperando por você!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Informações */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-blue mb-4">
              <FaMapMarkerAlt /> Endereço
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Mercadinho do Silvio</strong><br />
              Trv. José Monteiro de Melo, 156<br />
              Tabuleiro do Pinto, Rio Largo - AL<br />
              <span className="text-sm text-gray-500">CEP: 57100-000</span>
            </p>
            
            <div className="mt-6">
                <a 
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-colors w-full text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                <FaCar /> Traçar Rota Agora
                </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-xl font-bold text-brand-blue mb-4">
              <FaClock /> Horário de Funcionamento
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              {/* Dias Úteis (exceto quarta) */}
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Segunda, Terça</span>
                <span className="font-bold text-brand-blue">07:30 - 18:00</span>
              </li>
              
              {/* Quarta-feira (Destaque de Fechado) */}
              <li className="flex justify-between border-b border-gray-100 pb-2 bg-red-50 p-2 rounded">
                <span className="text-red-600 font-bold">Quarta</span>
                <span className="font-bold text-red-600">FECHADO</span>
              </li>

              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Quinta, Sexta</span>
                <span className="font-bold text-brand-blue">07:30 - 18:00</span>
              </li>

              {/* Sábado */}
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Sábado</span>
                <span className="font-bold text-brand-blue">07:30 - 18:00</span>
              </li>

              {/* Domingo */}
              <li className="flex justify-between pb-2">
                <span className="text-gray-600">Domingo</span>
                <span className="font-bold text-brand-blue">07:30 - 12:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mapa Incorporado (Fixo) */}
        <div className="h-96 md:h-full min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31480.35353745438!2d-35.849690889160144!3d-9.504885999999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7013663975ce62f%3A0xa35ad5d08f24f746!2sMercadinho%20do%20Silvio!5e0!3m2!1spt-BR!2sbr!4v1765840740220!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Mercadinho do Silvio"
          ></iframe>
        </div>

      </div>
    </div>
  );
}