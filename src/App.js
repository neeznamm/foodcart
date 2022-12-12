import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuPage from './Menu/MenuPage';
import Dashboard from './DashboardTemplate/Dashboard';
import AboutPage from './Contact/AboutPage';
import ContactPage from './Contact/ContactPage.jsx';
import Orders from './Menu/Orders';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/menu' element={<MenuPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

