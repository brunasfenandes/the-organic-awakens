import './QuizListPage.scss';
import BGMol from '../../components/BGMol/BGMol';

export default function QuizListPage() {
  return (
    <>
      <BGMol/>

      <div className='content'>
        <h2 className='content__title'>Quiz List</h2>

        <div className='content__container'>
          <ul className='content__list'>
            <li className='content__list--item'>Quiz 1</li>
            <li className='content__list--item'>Quiz 2</li>
            <li className='content__list--item'>Quiz 3</li>
            <li className='content__list--item'>Quiz 4</li>
            <li className='content__list--item'>Quiz 5</li>
            <li className='content__list--item'>Quiz 6</li>
            <li className='content__list--item'>Quiz 7</li>
            <li className='content__list--item'>Quiz 8</li>
            <li className='content__list--item'>Quiz 9</li>
            <li className='content__list--item'>Quiz 10</li>
          </ul>
        </div>
      </div>
    </>
  )
}