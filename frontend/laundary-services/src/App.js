import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import UserFooter from './components/UserFooter';
import Register from './components/Register';
import CreateOrder from './components/CreateOrder';
import PastOrder from './components/PastOrder';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/pastOrder" element={<PastOrder />} />
      </Routes>

      <Routes>
        <Route path="/createOrder" element={<CreateOrder />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Login />} />        
      </Routes>
      
      <Routes>
        <Route path="/register" element={<Register />} />        
      </Routes>
      
      <UserFooter></UserFooter>

    </div>
  );
}

export default App;
