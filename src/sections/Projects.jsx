import React, { useContext } from 'react';
import uuid from 'react-uuid';
import saper from '../images/saper.webp';
import quiz from '../images/quiz.webp';
import weather from '../images/weather.webp';
import mountains from '../images/mountains.webp';
import { LangContext } from '../context/LangContext';

function Projects() {
  const [lang] = useContext(LangContext);
  const projects = [
    {
      title: lang.projects.saper.title,
      image: saper,
      description: lang.projects.saper.description,
      stack: lang.projects.saper.stack,
      live: 'https://kamilwysz.github.io/Minesweeper/',
      github: 'https://github.com/kamilwysz/Minesweeper',
    },
    {
      title: lang.projects.quiz.title,
      image: quiz,
      description: lang.projects.quiz.description,
      stack: lang.projects.quiz.stack,
      live: 'https://kamilwysz.github.io/quiz-react-voivodeships/',
      github: 'https://github.com/kamilwysz/quiz-react-voivodeships',
    },
    {
      title: lang.projects.weather.title,
      image: weather,
      description: lang.projects.weather.description,
      stack: lang.projects.weather.stack,
      live: 'https://kamilwysz.github.io/weather-app/',
      github: 'https://github.com/kamilwysz/weather-app',
    },
    {
      title: lang.projects.mountains.title,
      image: mountains,
      description: lang.projects.mountains.description,
      stack: lang.projects.mountains.stack,
      live: 'https://kamilwysz.github.io/Mountain-landing-page/',
      github: 'https://github.com/kamilwysz/Mountain-landing-page',
    },
  ];
  const projectsList = projects.map((project, i) => {
    return (
      <div key={uuid()} className="container px-4 text-secondary">
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <figure
            className={`figure col-lg-6 hover-img bg-black overflow-hidden position-relative rounded-3 ${
              i % 2 !== 0 ? 'order-lg-2' : ''
            }`}
          >
            <img
              className="img-fluid"
              src={project.image}
              alt={`project ${lang.projects.portfolio.title}`}
            />
            <figcaption className="d-flex  justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
              {project.title === lang.projects.portfolio.title ? (
                ''
              ) : (
                <a href={project.live} target="blank">
                  <button
                    type="button"
                    className="btn btn-primary px-3 px-sm-5 m-2"
                  >
                    {lang.projects.buttonLive}
                  </button>
                </a>
              )}
              <a href={project.github} target="blank">
                <button
                  type="button"
                  className="btn btn-primary px-3 px-sm-5 m-2"
                >
                  {lang.projects.buttonGithub}
                </button>
              </a>
            </figcaption>
          </figure>
          <div className="col-lg-6">
            <div className="project-text w-100 mt-2 mb-4 px-sm-4 text-center text-lg-left">
              <h4 className="text-light">{project.title}</h4>
              <p className="pt-3 text-light">{project.description}</p>
              <p className="pt-3 pb-4 text-light">{project.stack}</p>
              <hr className="d-none d-lg-block mb-0 me-0" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="projects" className="py-4 bg-secondary text-center">
      <div className="container px-4 text-secondary">
        <h3 className="text-primary mb-4">{lang.projects.title}</h3>
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;
