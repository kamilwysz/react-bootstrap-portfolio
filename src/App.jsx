import React, { useState, useEffect } from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Technologies from './sections/Technologies';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Wave from './components/Wave';
import Shape from './components/Shape';
import LoadingScreen from './components/LoadingScreen';
import { LangProvider } from './context/LangContext';
import './styles/custom.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <LangProvider>
      <Header />
      <main>
        <Wave bg="bg-light" fill="#ba8f59" />
        <About />
        <Wave bg="bg-secondary" fill="#d7c3a3" />
        <Technologies />
        <Projects />
        <Wave bg="bg-dark" fill="#473520" />
        <Contact />
      </main>
      <Shape />
    </LangProvider>
  );
}

export default App;
