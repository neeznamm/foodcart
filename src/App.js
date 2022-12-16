import { Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard'
import ErrorPage from './ErrorPage';
import Offers from './Pages/Offers';
import Orders from './Pages/Orders'
import About from './Pages/About';
import Menu from './Pages/Menu';
import CartContext from "./context/CartContext";
import {useMemo, useState} from "react";
import Home from "./Pages/Home"

function App() {

  const [cart, setCart] = useState([]);
  const variableCart = useMemo(() => ({ cart, setCart }), [cart]);


  return (
      <CartContext.Provider value={variableCart}>
    <div className='app-container'>
      <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route path="/" element={<Home/>} />
            <Route path= "/offers" element={<Offers/>} />
            <Route path="/cart" element={<Orders /> } />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/*" element={<ErrorPage/>} />
          </Route>
      </Routes>
    </div>
      </CartContext.Provider>
  );
}

export default App;

