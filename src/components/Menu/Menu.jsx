import './Menu.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div className='menu'>
        <ul className='menu__list'>
          <Link to="/" className='menu__list--item'>
            About
          </Link>
          <Link to="/flashcards" className='menu__list--item'>
            Flashcards
          </Link>
          <Link to="/quiz" className='menu__list--item'>
            Quiz
          </Link>
          <Link to="/3dmol" className='menu__list--item'>
            3D Mol Visualizer
          </Link>
        </ul>
      </div>
    </>
  );
}
