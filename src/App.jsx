import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactButton from "./components/ContactButton";
import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About/> } />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
