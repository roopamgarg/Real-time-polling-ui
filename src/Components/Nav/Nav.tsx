import React from 'react';
import Logo from "../../assets/images/pie-chart.svg";
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="nav">
       <Link to="/"> <img className="nav__logo" src={Logo} alt="logo" /></Link>
    </div>
)

export default Nav