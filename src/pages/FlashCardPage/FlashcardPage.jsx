import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './FlashcardPage.scss';

export default function FlashcardPage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="main">
        <article className="main__flashcard">
          <div className="main__container">

          </div>
        </article>

        <Carousel responsive={responsive}>
          <div className="card">Item 1</div>
          <div className="card">Item 2</div>
          <div className="card">Item 3</div>
          <div className="card">Item 4</div>
          <div className="card">Item 5</div>
          <div className="card">Item 6</div>
          <div className="card">Item 7</div>
          <div className="card">Item 8</div>
          <div className="card">Item 9</div>
          <div className="card">Item 10</div>
        </Carousel>
      </div>
    </>
  );
}