import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar/>
      <Main/>
      <Footer />
    </div>
  );
};


export default App;

