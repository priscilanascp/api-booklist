/* eslint-disable no-undef */

import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Importa o ícone de pesquisa
import logo from '../assets/logo.png';

const Header = () => {
  return (
    
    <header>

<div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>
    
      </nav>
    
      <div className="search-box">
      
        <FaSearch className="search-icon" />
      </div>
    </header>
  );
};

export default Header;