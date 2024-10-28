import { NavLink, Link } from 'react-router-dom';
import './Footer.scss';
import facebook from '../../assets/icons/Icon-facebook.svg';
import instagram from '../../assets/icons/Icon-instagram.svg';
import twitter from '../../assets/icons/Icon-twitter.svg';
import github from '../../assets/icons/github-mark-white.svg';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__social">
            <p className="footer__social--title">Get in Touch</p>

            <div className="footer__social--icons">
              <a href="https://github.com/brunasfenandes/" target="_blank">
                <img src={github} alt="GitHub Icon" className="footer__icon"/>
              </a>
              <a href="https://www.instagram.com/brunafenandes" target="_blank">
                <img src={instagram} alt="Instagram Icon" className="footer__icon"/>
              </a>
              {/* <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="Facebook Icon" className="footer__icon"/>
              </a>  */}
              <a href="https://x.com/brunasfenandes" target="_blank">
                <img src={twitter} alt="Twitter Icon" className="footer__icon" />
              </a>
            </div>
          </div>
    
          <div className="footer__contact">
            <div className="footer__management">
              <p className="footer__management-title">Developed by:</p>
              <p className="footer__agency-address">Bruna Silva Fernandes</p>
              <a href="mailto:bruna.fenandes@outlook.com" target="_blank">bruna.fenandes@outlook.com</a>
            </div>
    
            <div className="footer__management">
              <a className="footer__management-title" href='https://www.npmjs.com/package/react-molviewer' target="_blank">React-Molviewer</a>

              <div className='footer__one'>
                <p className="footer__one--name">Paggy Huang</p>
                <a href="mailto:paggy.huang@gmail.com" target="_blank">paggy.huang@gmail.com</a>
              </div>

              <div className='footer__one'>
                <p className="footer__one--name">Claire Lin</p>
                <a href="mailto:lclaire@gmail.com" target="_blank">lclaire@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="footer__logo">
            <h4 className='footer__logo--title'>THE ORGANIC AWAKENS</h4>
          </div>
      
          <div className="footer__copyright">
            The Organic Awakens © 2024 - Inspiring Organic Chemistry Learning
          </div>
        </div>
      </footer>
    </>
  );
}