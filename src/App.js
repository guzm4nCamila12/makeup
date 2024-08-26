import './App.css';
import CardList from './componentes/body/CardList';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Carrusel from './componentes/carrusel/Carrusel';
import BarraRedes from './componentes/Barra_redes_sociales/BarraRedesSociales'

function App() {
  return (
    <div>
      <Header />
      <Carrusel />
      <CardList />
      <Footer />
      <BarraRedes/>
    </div>
  );
}

export default App;
