import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuPage from './Menu/MenuPage';
import Dashboard from './DashboardTemplate/Dashboard';
import AboutPage from './Contact/AboutPage';
import ContactPage from './Contact/ContactPage.jsx';
import OrdersPage from './Menu/OrdersPage';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
        <Routes>
          <Route path='/menu' element={<MenuPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/orders' element={<OrdersPage />}/>
          <Route path='/*' element={<ErrorPage />}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;

