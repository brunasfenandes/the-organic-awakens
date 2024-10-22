import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './FlashcardPage.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import BGMol from '../../components/BGMol/BGMol'; 

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function FlashcardPage() {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  const { id } = useParams();

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

  const getFlashcards = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/flashcards`);
      setFlashcards(data);
      console.log(data);

      const initialFlashcard = data.find(card => card.id === parseInt(id));
      setSelectedFlashcard(initialFlashcard);

    } catch (error) {
      console.error('Error getting flashcards:', error);
    }
  };

  const handleCardClick = (card) => {
    setSelectedFlashcard(card);
    window.history.pushState(null, '', `/flashcards/${card.id}`);
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  const handleFlashcardSelect = (flashcard) => {
    setSelectedFlashcard(flashcard);
  };

  if (flashcards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <BGMol /> */}
      <div className="main">
        <article className="main__flashcard">
          <div className="main__container">
            {selectedFlashcard ? (
              <div className="main__content">
                <h2>{selectedFlashcard.topic}</h2>
                <p>{selectedFlashcard.content}</p>
              </div>
            ) : (
              <p>Select a flashcard to see its content.</p>
            )}
          </div>
        </article>

        <Carousel responsive={responsive}>
          {flashcards.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedFlashcard && selectedFlashcard.id === card.id ? 'active' : ''}`}
              onClick={() => handleCardClick(card)}
              style={{
                transform: selectedFlashcard && selectedFlashcard.id === card.id ? 'translateY(-5px) translateX(5px)' : 'none',
                boxShadow: selectedFlashcard && selectedFlashcard.id === card.id ? '0px 4px 10px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <p>{card.topic}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}