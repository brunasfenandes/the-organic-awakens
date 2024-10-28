import BGMol from '../../components/BGMol/BGMol';
import { NavLink, Link } from 'react-router-dom';
import './HomePage.scss';
import hero from '../../assets/video/hero_video.mp4';
import HeroTitle from '../../components/HeroTitle/HeroTitle';
import flashcards from '../../assets/images/org_flash.jpg'
import quiz from '../../assets/images/quiz_icon.png'
import mol from '../../assets/images/ethyl_acetate.png'
import FeatureHighlights from '../../components/FeatureHighlights/FeatureHighlights';

export default function HomePage() {
  return (
    <main className='home'>

      <div className='home__container'>
        <div className='home__header'>
          <HeroTitle />
        </div>

        <article className='home__article'>
          <p>Welcome to your all-in-one chemistry study tool! Boost your understanding of organic chemistry with interactive quizzes, flashcards, and 3D molecular visualizations.</p>
        </article>

        <div className='home__hero'>
          <BGMol />
        </div>

        

        <div className='home__section'>
          <NavLink to="/flashcards">
            <article className='home__section--card'>
              <p className='home__section--title'>
                FLASHCARDS
              </p>

              <div className='home__section--content'>
                <img
                  className='home__section--image'
                  src={flashcards}
                  alt='Flashcards'
                />
              </div>
            </article>
          </NavLink>

          <NavLink to="/quiz">
            <article className='home__section--card'>
              <p className='home__section--title'>
                QUIZZES
              </p>

              <div className='home__section--content'>
                <img
                  className='home__section--image home__section--quiz'
                  src={quiz}
                  alt='Quizzes'
                />
              </div>
            </article>
          </NavLink>

          <NavLink to="/3dmol">
            <article className='home__section--card'>
              <p className='home__section--title'>
                3D MOL EXPLORER
              </p>

              <div className='home__section--content'>
                <img
                  className='home__section--image'
                  src={mol}
                  alt='3D Mol'
                />
              </div>
            </article>
          </NavLink>
        </div>

        <FeatureHighlights />
      </div>
    </main>
  );
}