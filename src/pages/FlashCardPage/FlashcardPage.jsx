import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './FlashcardPage.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function FlashcardPage() {
  const [flashcards, setFlashcards] = useState([]);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);
  const location = useLocation();
  const { topic } = queryString.parse(location.search);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const responsive = {
    superLargeDesktop: {
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
      const { data } = await axios.get(`${backendURL}:${port}/flashcards/${id}`);
      setFlashcards(data);
  
      setSelectedFlashcard(null);
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
  }, [id]);

  if (!flashcards.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="main main--fl">
        <div className="main__header">
          <button className="button button--back">
            <img 
              src="/src/assets/icons/arrow-back.svg"
              className="icon icon--back"
              alt="Arrow Back Icon"
              onClick={handleGoBack}
            />
          </button>

          <h5 className="main__header--title">{topic}</h5>
        </div>
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
              <p>{card.content.length > 30 ? `${card.content.substring(0, 30)}...` : card.content}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
