import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
