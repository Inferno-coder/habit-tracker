import React from 'react';
import './App.css';
import About from './components/about-component/About';
import Header from './components/header-component/Header';
import Feature from './components/features-component/Feature';
import AuthModal from './modalComponents/auth-modal-component/AuthModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/dashboard-component/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for '/' path */}
          <Route path='/' element={<>
            <Header />
            <About />
            <Feature />
          </>} />

          {/* Route for '/auth/signup' */}
          <Route path='/auth/signup' element={<AuthModal isOpen={true} onClose={() => { }} type='signup' />} />

          {/* Route for '/auth/login' */}
          <Route path='/auth/login' element={<AuthModal isOpen={true} onClose={() => { }} type='login' />} />

          {/* Route for '/user/:id' */}
          <Route path='/user/:id/*' element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
