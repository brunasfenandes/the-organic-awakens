import './FlashcardsListPage.scss';
import BGMol from '../../components/BGMol/BGMol';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import queryString from 'query-string';

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function FlashcardsListPage() {
  const [flashcardTopics, setFlashcardTopics] = useState([]);

  const getFlashcards = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/flashcards`);
      setFlashcardTopics(data);
      console.log(data);
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
        <h2 className='content__title'>Flashcards List</h2>
        <div className='content__container'>
          <ul className='content__list'>
            {flashcardTopics.map((topic) => (
              <li 
                key={topic.id} 
                className='content__list--item' 
                id='list'> 
                <Link to={`/flashcards/${topic.id}?topic=${encodeURIComponent(topic.topic)}`} key={topic.id}>
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
