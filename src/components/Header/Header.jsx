import { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import menu from '../../assets/icons/menu.svg'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [rotateMenu, setRotateMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const isNowMobile = window.innerWidth <= 768; 
    setIsMobile(isNowMobile);

    if (!isNowMobile) {
      setOpenMenu(false);
      setRotateMenu(false);
    }
  };

  // Check on mount and resize
  useEffect(() => {
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);


  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
    setRotateMenu((prev) => !prev);
  };

  return (
    <>
      <div className={`header ${openMenu ? 'header--open' : 'header--closed'}`}>
        <nav className='header__nav'>
          <div className='header__nav--right'>
            <NavLink to="/">
              <h4 className='header__nav--title'>THE ORGANIC AWAKENS</h4>
            </NavLink>
          </div>

          <div className='header__nav--left'>
            <button 
              className={`button button--menu ${rotateMenu ? 'rotate' : ''}`}
              onClick={handleMenuClick} 
            > 
              <img 
                className="icon icon--menu"
                src={menu}
              />
            </button>
          </div>

          <div className='header__menu'>
            <ul className='menu__list'>
              <Link to="/about" className='menu__list--item'>
                About
              </Link>
              <Link to="/flashcards" className='menu__list--item'>
                Flashcards
              </Link>
              <Link to="/quiz" className='menu__list--item'>
                Quiz
              </Link>
              <Link to="/3dmol" className='menu__list--item'>
                3D Mol Explorer
              </Link>
            </ul>
          </div>
        </nav>

        {isMobile && openMenu && <Menu />}
      </div>
    </>
  );
}