import BGMol from '../../components/BGMol/BGMol';
import './HomePage.scss';
import hero from '../../assets/video/hero_video.mp4';
import HeroTitle from '../../components/HeroTitle/HeroTitle';

export default function HomePage() {
  return (
    <main className='home'>
      <BGMol/>

      <div className='home__container'>
        <div className='home__header'>
          <HeroTitle />
        </div>
      </div>

      {/* <div className='home__hero'>
        <video src={hero} autoPlay loop muted className='home__hero--image'/>
      </div> */}
    </main>
  );
}