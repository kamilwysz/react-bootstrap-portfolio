import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

function About() {
  const [lang] = useContext(LangContext);

  return (
    <section id="about" className="py-4 text-center bg-light">
      <div className="container px-4 text-secondary">
        <h3 className="mb-4">{lang.about.title}</h3>
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <p>{lang.about.description}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
