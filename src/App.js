import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './component/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import { AuthProvider } from './component/AuthContext'; 
import CustomerHome from './component/CustomerHome';
import Storage from './component/Storage';
import Mid from './component/Mid';
function App() {
    return (
      
      <BrowserRouter>
      <AuthProvider>
      <div >
        <h1 className="App-header">Tapioca Cafe</h1>

              <Routes>
                  <Route exact path="/" element={<SignIn />} />
                  <Route path="/customerhome" element={<CustomerHome/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
                  <Route path="/storage" element={<Storage/>} />
                  <Route path="/mid" element={<Mid/>} />
              </Routes>
      </div>
      </AuthProvider>
      </BrowserRouter>
      
  );
}
export default App;