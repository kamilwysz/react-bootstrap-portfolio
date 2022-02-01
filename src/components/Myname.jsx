import React from 'react';
import Arrow from './Arrow';

function Myname() {
  return (
    <div className="fox-container container d-flex align-items-center flex-column justify-content-center min-vh-100 pb-4">
      <h1 className="masthead-heading">Kamil Wyszyński</h1>
      <h2 className="masthead-subheading">Front End Developer</h2>
      <Arrow />
    </div>
  );
}

export default Myname;
