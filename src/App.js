// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'project/src/hook/header/Header.js';
import Footer from './hook/footer';
import Home from './pages/home/Home';
import Main from './pages/main/Main';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        {/* 필요한 다른 경로들을 여기에 추가 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
