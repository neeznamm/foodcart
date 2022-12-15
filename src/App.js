import {useState} from 'react'
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Offers from './Pages/Offers';
import OrdersPage from './Menu/OrdersPage';
import About from './Pages/About';
import Menu from './Pages/Menu'

function App() {

  return (
    <div className='app-container'>
      <Routes>
            <Route path="/" element={<Dashboard />}>
            <Route path="/offers" element={<Offers/>} />
            <Route path="/cart" element={<OrdersPage /> } />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

