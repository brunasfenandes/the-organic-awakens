import './QuizListPage.scss';
import BGMol from '../../components/BGMol/BGMol';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import arrowback from '../../assets/icons/arrow-back.svg'

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function QuizListPage() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const getQuizzes = async () => {
    try {
      const { data } = await axios.get(`${backendURL}/quiz`);
      setQuizzes(data);
    } catch (error) {
      setError('Failed to get quizzes');
      console.error('Error getting quizzes:', error)
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  if (loading) return <p>Loading quizzes...</p>;
  if (error) return <p>{error}</p>;

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
          <h2 className='content__header--title'>Quiz List</h2>
        </div>
        
        <div className='content__container'>
          <ul className='content__list'>
            {quizzes.map((quiz) => (
              <li 
                key={quiz.id} 
                className='content__list--item'>
                <Link to={`/quiz/${quiz.id}`}>
                  {quiz.topic}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}