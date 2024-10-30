import './FlashcardsListPage.scss';
import BGMol from '../../components/BGMol/BGMol';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import arrowback from '../../assets/icons/arrow-back.svg'

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function FlashcardsListPage() {
  const [flashcardTopics, setFlashcardTopics] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const getFlashcards = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/flashcards`);
      setFlashcardTopics(data);
    } catch (error) {
      console.error('Error getting flashcards:', error);
    }
  };

  useEffect(() => {
    getFlashcards();
  }, []);

  if (flashcardTopics.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <BGMol/>
      <div className='content'>
        <div className='content__header'>
          <button className="button button--back">
            <img 
              src={arrowback}
              className="icon icon--back"
              alt="Arrow Back Icon"
              onClick={handleGoBack}
            />
          </button>
          <h2 className='content__header--title'>Flashcards List</h2>
        </div>
        
        <div className='content__container'>
          <ul className='content__list'>
            {flashcardTopics.map((topic) => (
              <li 
                key={topic.id} 
                className='content__list--item' 
                id='list'> 
                <Link 
                  to={`/flashcards/${topic.id}?topic=${encodeURIComponent(topic.topic)}`} 
                  key={topic.id}>
                  {topic.topic}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
