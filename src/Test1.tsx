import React from 'react';
import Test2 from './Test2';
import abcd from '../src/logo192.png';

const Test1 = () => {
  return (
    <>
      This has jsx component as an import.
      <Test2 />
      <img src={abcd} alt="hello" />
    </>
  );
}
export default Test1;