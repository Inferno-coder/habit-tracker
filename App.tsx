import React from 'react';
import './App.css';
import About from './components/about-component/About';
import Header from './components/header-component/Header';
import Feature from './components/features-component/Feature';
import AuthModal from './modalComponents/auth-modal-component/AuthModal';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Feature/>
      <Router>
        <Routes>
          <Route path='/auth/signup' element={<AuthModal isOpen={true} onClose={()=>{}} type='signup' />} />
          <Route path='/auth/login' element={<AuthModal isOpen={true} onClose={()=>{}} type='login' />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
