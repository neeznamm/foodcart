<<<<<<< Updated upstream
import './App.css';
import Dashboard from "./DashboardTemplate/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuPage from './Menu/MenuPage';
import HomePage from './Home/HomePage';
import AboutPage from './Contact/AboutPage';
import ContactPage from './Contact/ContactPage';


function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/menu' element={<MenuPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;

