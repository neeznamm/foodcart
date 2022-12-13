import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './DashboardTemplate/Dashboard';
import MenuPage from './Menu/MenuPage';
import OrdersPage from './Menu/OrdersPage';
import AboutPage from './Contact/AboutPage';

function App() {
  return (
    <div className='app-container'>
      <Routes>
            <Route path="/" element={<Dashboard />}>
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/orders" element={<OrdersPage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

