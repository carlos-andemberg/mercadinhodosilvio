import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Mercadinho do Silvio - O Barateiro de Rio Largo';
export const size = {
  width: 600,
  height: 600,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1e2f6f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '40px',
        }}
      >
        {/* Cesta simulada com ícones/SVG ou texto para ficar bonito */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          marginBottom: '40px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
        }}>
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 15) scale(0.6)" stroke="#1e2f6f" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 10 L30 10 L45 80 L130 80 L145 30 L40 30" />
              <circle cx="60" cy="95" r="8" fill="#1e2f6f" stroke="none"/>
              <circle cx="115" cy="95" r="8" fill="#1e2f6f" stroke="none"/>
              <line x1="70" y1="30" x2="65" y2="80" strokeWidth="4"/>
              <line x1="100" y1="30" x2="105" y2="80" strokeWidth="4"/>
              <line x1="42" y1="55" x2="140" y2="55" strokeWidth="4"/>
            </g>
          </svg>
        </div>
        
        <h1
          style={{
            fontSize: '60px',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: 1.1,
            color: '#fdd835',
            textShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}
        >
          MERCADINHO DO SILVIO
        </h1>
        <p
          style={{
            fontSize: '32px',
            textAlign: 'center',
            opacity: 0.9,
            fontWeight: 500,
            maxWidth: '500px',
            lineHeight: 1.3
          }}
        >
          O Barateiro de Rio Largo!
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
