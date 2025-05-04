import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./header/Header";
import './App.css';
import { Contact } from './components/ui/Contact';
import { Services } from './components/ui/Services';
import { Skills } from './components/ui/Skills';
import { Projects } from './components/ui/Projects';
import { About } from './components/ui/About';
import AnimatedSection from './components/global/AnimatedSection';

const Home = () => {
  return (
    <div className="home-content">
      <AnimatedSection animation="fade">
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-right" delay={200}>
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-left" delay={200}>
        <Services />
      </AnimatedSection>
      
      <AnimatedSection animation="zoom" delay={200}>
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection animation="fade" delay={300}>
        <Contact />
      </AnimatedSection>
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;