import './Header.scss';

export default function Header() {
  return (
    <>
      <div className='header'>
        <nav className='header__nav'>
          <div className='header__nav--right'>
            <h4>THE ORGANIC AWAKENS</h4>
          </div>

          <div className='header__nav--left'>
            <button className='button button--menu'> 
              <img 
                className="icon icon--menu"
                src="/src/assets/icons/menu.svg"
              />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}