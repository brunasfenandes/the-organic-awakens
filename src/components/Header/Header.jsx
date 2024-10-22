import { useState } from 'react';
import Menu from '../Menu/Menu';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [rotateMenu, setRotateMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
    setRotateMenu((prev) => !prev);
  };

  return (
    <>
      <div className='header'>
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
                src="/src/assets/icons/menu.svg"
              />
            </button>
            
            {
              openMenu && <Menu />
            }
          </div>
        </nav>
      </div>
    </>
  );
}