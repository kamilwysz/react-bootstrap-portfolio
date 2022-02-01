import React, { useState, useContext } from 'react';
import poland from '../images/poland.webp';
import unitedKingdom from '../images/united-kingdom.webp';
import { LangContext } from '../context/LangContext';
import en from '../data/lang/en.json';
import pl from '../data/lang/pl.json';

function Navigation() {
  const [lang, selectEn, selectPl] = useContext(LangContext);
  const [showNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-sm sticky-sm-top fixed-top navbar-light bg-primary shadow-sm">
      <div className="container">
        <button
          className=" navbar-toggler my-3 ms-4"
          type="button"
          onClick={() => handleToggleNav()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${showNav ? 'show' : ''} collapse navbar-collapse`}>
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                {lang.navigation.about}
              </a>
            </li>
            <li className="nav-item">
              <a href="#technologies" className="nav-link">
                {lang.navigation.technologies}
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                {lang.navigation.projects}
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                {lang.navigation.contact}
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-3 pt-lg-1 position-absolute top-0 end-0">
          <img
            src={poland}
            className={`mx-3 rounded-circle cursor-pointer w-25 ${
              lang === pl ? 'border' : 'opacity-75'
            }`}
            onClick={() => selectPl()}
            alt="polish flag"
          />
          <img
            src={unitedKingdom}
            className={`mx-3 rounded-circle cursor-pointer w-25 ${
              lang === en ? 'border' : 'opacity-75'
            }`}
            onClick={() => selectEn()}
            alt="british flag"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
