import { Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Offers from './Pages/Offers';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Menu from './Pages/Menu'

function App() {
  return (
    <div className='app-container'>
      <Routes>
            <Route path="/" element={<Dashboard />}>
            <Route path="/offers" element={<Offers/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

