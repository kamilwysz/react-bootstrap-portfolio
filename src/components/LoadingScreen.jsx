import React from 'react';
import Loader from 'react-js-loader';
import Shape from './Shape';

function LoadingScreen() {
  return (
    <>
      <div className="bg-primary vh-100 d-flex justify-content-center">
        <Loader type="bubble-top" bgColor={'#32485c'} />
      </div>
      <Shape />
    </>
  );
}

export default LoadingScreen;
