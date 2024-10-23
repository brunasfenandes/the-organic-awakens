import { NavLink, Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      {/* <div className='footer'>
        <div className='footer__container'>
          <div className='footer__right'>
            <NavLink to="/">
              <h4 className='footer__right--title'>THE ORGANIC AWAKENS</h4>
            </NavLink>
          </div>
        </div>
      </div> */}

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__social">
          <p className="footer__social--title">Get in Touch</p>

            <div className="footer__social--icons">
              <a href="https://www.instagram.com/" target="_blank">
                <img src="/src/assets/icons/Icon-instagram.svg" alt="Instagram Icon" className="footer__icon"/>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src="/src/assets/icons/Icon-facebook.svg" alt="Facebook Icon" className="footer__icon"/>
              </a> 
              <a href="https://www.twitter.com/" target="_blank">
                <img src="/src/assets/icons/Icon-twitter.svg" alt="Twitter Icon" className="footer__icon"/>
              </a>
            </div>
          </div>
    
          <div className="footer__contact">
            <div className="footer__management">
              <p className="footer__management-title">Bruna Silva Fernandes</p>
              <p className="footer__management-address">503 Broadway Penthouse,<br/>New York, NY 10012, USA</p>
              <a href="mailto:bruna.fenandes@outlook.com" target="_blank">bruna.fenandes@outlook.com</a>
            </div>
    
            {/* <div class="footer__agency">
              <p class="footer__agency-title">Limitless Artist Group</p>
              <p class="footer__agency-info">Booking Agent for <br/>US / South America / Japan</p>
              <a href="mailto:bookings@limitlessag.com" target="_blank">bookings@limitlessag.com</a>
            </div>
    
            <div class="footer__agency">
              <p class="footer__agency-title">ARCH Entertainment</p>
              <p class="footer__agency-info">Booking Agent for<br/>UK / EU / AU</p>
              <a href="mailto:bookings@archentertainment.com" target="_blank">bookings@archentertainment.com</a>
            </div> */}
          </div>
          
          <div className='footer__bot'>
            <div className="footer__logo">
              <h4 className='footer__logo--title'>THE ORGANIC AWAKENS</h4>
            </div>
      
            <div className="footer__copyright">
              Copyright The Organic Awakens © 2024 All Rights Reserved
            </div>
            </div>
        </div>
      </footer>
    </>
  );
}