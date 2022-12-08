import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../styles/header.scss';

import React from 'react'

const Header = () => {
  return (
    <header>
    <img src={logo}/>
    </header>
  )
}

export default Header
