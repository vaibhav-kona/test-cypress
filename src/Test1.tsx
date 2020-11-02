import React from 'react';
import Test2 from './Test2';
import img1 from '../src/logo512.png';
import logo from '../src/logo.svg';

const Test1 = () => {
  return (
    <>
      This has jsx component as an import.
      <Test2 />
      <img src={img1} alt="img1" />
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}
export default Test1;