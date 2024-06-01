// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar'; // Обнови путь до Navbar
import Footer from './components/common/Footer/Footer'; // Обнови путь до Footer
import Home from './components/pages/Home/Home'; // Обнови путь до Home
import About from './components/pages/About/About'; // Обнови путь до About
import Services from './components/pages/Services/Services'; // Обнови путь до Services
import Contacts from './components/pages/Contacts/Contacts'; // Обнови путь до Contacts
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
