import { Link, NavLink } from 'react-router-dom'
import React from 'react';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src = {LogoS} alt = "logo" />
        </Link>

        <nav>
            <NavLink 
                exact = "true" 
                activeclassname = "active" 
                to = "/"
            >
                <FontAwesomeIcon icon = {faHome} color='#4d4d4e'/>
            </NavLink>

            <NavLink 
                exact = "true" 
                activeclassname = "active" 
                className="about-link" 
                to = "/about"
            >
                <FontAwesomeIcon icon = {faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink 
                exact = "true" 
                activeclassname = "active" 
                className="contact-link" 
                to = "/contact"
            >
                <FontAwesomeIcon icon = {faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target='_blank' 
                    rel = 'noreferrer' 
                    href="https://www.linkedin.com/in/pranavkothapalli"
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>

                <a 
                    target='_blank' 
                    rel = 'noreferrer' 
                    href="kothapallipranav@gmail.com"
                >
                    <FontAwesomeIcon icon={faMailBulk} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar