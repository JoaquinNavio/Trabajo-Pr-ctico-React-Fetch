import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import DondeEstamos from './components/DondeEstamos';
import Home from './components/Home';
import Instrumento from './components/instrumento';
import Detalle from "./components/Detalle";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DondeEstamos' element={<DondeEstamos />} />
        <Route path='/Instrumentos' element={<Instrumento />} />
        <Route path='/Detalle/:id' element={<Detalle></Detalle>} />      </Routes>
    </Router>
  );
}

export default App;