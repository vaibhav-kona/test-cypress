import React from 'react';
import Test2 from './Test2';
import Logo from './logo192.png';

const Test1 = () => {
  return (
    <>
      This has jsx component as an import.
      <Test2 />
      <img src={Logo} alt="react" />
    </>
  );
}
export default Test1;