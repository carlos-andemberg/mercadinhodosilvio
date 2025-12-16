import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Location } from './pages/Location';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        
        {/* O Header fica fixo no topo */}
        <Header />

        {/* O conteúdo principal expande para empurrar o footer pra baixo */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Catalog />} />
            <Route path="/localizacao" element={<Location />} />
          </Routes>
        </main>

        {/* O Footer fecha a página */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;