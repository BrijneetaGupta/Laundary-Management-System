import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import UserFooter from './components/UserFooter';
import Register from './components/Register';
import DashboardSidebar from './components/DashboradSidebar';
import CreateOrder from './components/CreateOrder';
import PastOrder from './components/PastOrder';

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <DashboardSidebar />
      <CreateOrder /> */}
      {/* <PastOrder /> */}

      <Routes>
        <Route path="/" element={<Login />} />        
      </Routes>
      
      <Routes>
        <Route path="/register" element={<Register />} />        
      </Routes>
      
      <Footer></Footer>
      <UserFooter></UserFooter>

    </div>
  );
}

export default App;
