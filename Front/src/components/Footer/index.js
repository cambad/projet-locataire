import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-ul">
      <li className="footer-items"><a href="#">Contact</a></li>
      <li className="footer-items"><a href="#">Mentions légales</a></li>
      <li className="footer-items"><a href="#">Qui sommes nous ?</a></li>
      <li id="icons" className="footer-items"><FaFacebookSquare size="1.5em" /> <FaTwitterSquare size="1.5em" /> <FaGithubSquare size="1.5em" /> </li>
    </ul>
  </footer>
);

export default Footer;
