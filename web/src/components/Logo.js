import React from 'react';
// import { GrTechnology } from 'react-icons/gr';
import LogoStyles from '../styles/LogoStyles';
import L4 from '../images/L4.png'

function Logo() {
  return (
    <LogoStyles to="/">
      {/* <GrTechnology /> */}
      <img src={L4} alt="Logo" />
    </LogoStyles>
  );
}

export default Logo;
