import './App.css';
import CardList from './componentes/body/CardList';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Carrusel from './componentes/carrusel/Carrusel';

function App() {
  return (
    <div>
      <Header />
      <Carrusel />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
