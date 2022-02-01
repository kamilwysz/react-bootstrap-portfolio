import React from 'react';
import PropTypes from 'prop-types';

function Wave(props) {
  const { bg, fill } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`d-block ${bg}`}
      viewBox="0 0 1440 94"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1442 63.8127L1393.93 69.2331C1345.87 74.4071 1249.73 85.2479 1153.6 90.4219C1057.47 95.8423 961.333 95.8423 865.2 85.2479C769.067 74.4071 672.933 53.2183 576.8 53.2183C480.667 53.2183 384.533 74.4071 288.4 79.8275C192.267 85.2479 96.1333 74.4071 48.0667 69.2331L0 63.8127V-2.80142e-06H48.0667C96.1333 -2.80142e-06 192.267 -2.80142e-06 288.4 -2.80142e-06C384.533 -2.80142e-06 480.667 -2.80142e-06 576.8 -2.80142e-06C672.933 -2.80142e-06 769.067 -2.80142e-06 865.2 -2.80142e-06C961.333 -2.80142e-06 1057.47 -2.80142e-06 1153.6 -2.80142e-06C1249.73 -2.80142e-06 1345.87 -2.80142e-06 1393.93 -2.80142e-06H1442V63.8127Z"
        fill={fill}
      ></path>
    </svg>
  );
}

Wave.propTypes = {
  bg: PropTypes.string,
  fill: PropTypes.string,
};

export default Wave;
