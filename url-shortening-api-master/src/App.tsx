import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import UrlForm from './components/UrlForm';
import Features from './components/Features';
import Call from './components/Call';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UrlForm />
      <Features />
      <Call />
      <Footer />
    </>
  );
}

export default App;
