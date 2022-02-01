import React from 'react';
import shape from '../images/shape.webp';

function Shape() {
  return (
    <img
      className="shape position-fixed top-0 min-vw-100 opacity-25"
      src={shape}
      alt="shape"
    ></img>
  );
}

export default Shape;
