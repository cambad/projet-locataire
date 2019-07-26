import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-ul">
      <li className="footer-items"><NavLink to="/contact">Contact</NavLink></li>
      <li className="footer-items"><NavLink to="/mentions-legales">Mentions légales</NavLink></li>
      <li className="footer-items"><NavLink to="/qui-sommes-nous">Qui sommes nous ?</NavLink></li>
    </ul>
    <div id="icons" className="footer-social">
      <FaFacebookSquare size="2em" className="footer-icon" />
      <FaTwitterSquare size="2em" className="footer-icon" />
      <FaGithubSquare size="2em" className="footer-icon" />
    </div>
  </footer>
);

export default Footer;
