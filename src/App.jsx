import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CPU from './Components/CPU/CPU';
import Header from './Header';
import Footer from './Footer';
import Memoria from './Components/memoria/Memoria';
import Parte3 from './Components/Parte3/Parte3';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Router>
        <Header />
        <div className="flex-grow-1 overflow-auto">
          <Routes>
            {/* Define CPU como a página inicial ("/") */}
            <Route path="/" element={<CPU />} />
            {/* Define a rota específica para "/cpu" */}
            <Route path="/cpu" element={<CPU />} />
            <Route path="/memoria" element={<Memoria />} />
            <Route path="/parte3" element={<Parte3 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
