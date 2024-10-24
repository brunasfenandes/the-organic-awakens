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
              <p className="footer__management-title">Developed by:</p>
              <p className="footer__agency-address">Bruna Silva Fernandes</p>
              <a href='https://github.com/brunasfenandes/' className="footer__management-address" target="_blank">github.com/brunasfenandes</a>
              <a href="mailto:bruna.fenandes@outlook.com" target="_blank">bruna.fenandes@outlook.com</a>
            </div>
    
            <div className="footer__management">
              <p className="footer__management-title">Developed by:</p>
              <p className="footer__agency-address">Bruna Silva Fernandes</p>
              <a href='https://github.com/brunasfenandes/' className="footer__management-address" target="_blank">github.com/brunasfenandes</a>
              <a href="mailto:bruna.fenandes@outlook.com" target="_blank">bruna.fenandes@outlook.com</a>
            </div>
          </div>
          
          <div className="footer__logo">
            <h4 className='footer__logo--title'>THE ORGANIC AWAKENS</h4>
          </div>
      
          <div className="footer__copyright">
            Copyright The Organic Awakens © 2024 All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}