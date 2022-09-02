import './assets/styles/custom.scss';
import './App.css';

import CarCard from 'components/CarCard';
import Catalogo from 'pages/Catalogo';
import Navbar from 'components/Navbar';
import SearchButton from 'components/SearchButton';

function App() {
  return (
    <>
    <Navbar />
    <Catalogo />
        
    </>
  );
}

export default App;
