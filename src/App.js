import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./header/Header";
import './App.css';
import { Contact } from './components/ui/Contact';
import { Services } from './components/ui/Services';
import { Skills } from './components/ui/Skills';
import { Projects } from './components/ui/Projects';
import { About } from './components/ui/About';

// Home component - can create a separate file for this later
const Home = () => {
  return (
    <div className="home-content">
      <div>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      </div>
      <Header/>
    </div>
  );
};


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Assuming Contact is for both about and contact */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;