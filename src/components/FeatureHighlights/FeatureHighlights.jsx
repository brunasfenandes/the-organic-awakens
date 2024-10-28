import './FeatureHighlights.scss';

export default function FeatureHighlights() {
  return (
    <>
      <div className='home__highlights'>
        <ul className='home__highlights--list'>
          <li className='home__highlights--item'>
            Flashcards: <br/> Dive into fundamental organic chemistry topics with dynamic flashcards covering essential bond definitions, functional groups, and real-world examples.
          </li>
          <li className='home__highlights--item'>
            Quizzes: <br/> Challenge yourself with interactive quizzes tailored to test your understanding of various bond types, molecular structures, and organic reactions.
          </li>
          <li className='home__highlights--item'>
            3D Molecule Explorer: <br/> Visualize and explore detailed 3D models of organic molecules, gaining insights into their structures, spatial orientation, and interactions.
          </li>
        </ul>
      </div>
    </>
  )
}