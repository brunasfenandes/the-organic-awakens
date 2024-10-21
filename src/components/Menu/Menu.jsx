import './Menu.scss';

export default function Menu() {
  return (
    <>
      <div className='menu'>
        <ul className='menu__list'>
          <li 
           className='menu__list--item'
          >About</li>
          <li 
            className='menu__list--item'
          >Flashcards</li>
          <li 
            className='menu__list--item'
          >Quiz</li>
          <li 
            className='menu__list--item'
          >3D Mol Visualizer</li>
        </ul>
      </div>
    </>
  );
}