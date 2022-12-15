import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

import React from 'react'

const Header = () => {
  return (
    
    <header>
      <NavLink to="/home"><img src={logo}/></NavLink>
      <p>Rick et Morty : apprentissage de react sans prise de tête</p>
        <FontAwesomeIcon icon={faHtml5} color='orangered' className='icon-header'/>
        <FontAwesomeIcon icon={faCss3Alt} color='blue' className='icon-header'/>
        <FontAwesomeIcon icon={faJs} color='yellow' className='icon-header'/>
        <FontAwesomeIcon icon={faReact} color='cyan' className='icon-header'/>
    </header>
    
    
  )
}

export default Header

