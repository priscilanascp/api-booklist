
import logo from '../assets/logo2.png'; // Importe o arquivo do logo
import { FaFacebook , FaTwitter , FaInstagram   } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <img src={logo} alt="Logo" />
      </div>
      
      <div className="footer-links">
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <hr className='hr-footer'/> 

      

      <div className="social-icons">
        <FaFacebook/>
        <FaTwitter />
        <FaInstagram />
      </div>
      
      
    </footer>
  );
};

export default Footer;