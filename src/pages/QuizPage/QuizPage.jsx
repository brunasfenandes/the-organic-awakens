import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import arrowback from '/src/assets/icons/arrow-back.svg';
import BGMol from '../../components/BGMol/BGMol';
import ResultModal from '../../components/ResultModal/ResultModal';

const port = import.meta.env.VITE_PORT;
const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setModalOpen(false);
  }

  const handleGoBack = () => {
    navigate('/quiz');
  };

  const getQuestions = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/quiz/${id}`);
      setQuestions(data.questions); 
    } catch (error) {
      console.error('Error getting questions:', error);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, [id]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
    setIsAnswerCorrect(isCorrect);
    setIsAnswered(true);
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsQuizFinished(true);
      setModalOpen(true);
    } else {
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsAnswerCorrect(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setIsQuizFinished(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setModalOpen(false);
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (questions.length === 0) {
    return <p>No questions available for this quiz.</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const percentage = ((correctCount / questions.length) * 100).toFixed(2);

  if (!currentQuestion) {
    return <p>No question available.</p>;
  }

  return (
    <>
      <BGMol/>

      <div className='main'>
        <div className="main__header">
          <button className="button button--back">
            <img 
              src={arrowback}
              className="icon icon--back"
              alt="Arrow Back Icon"
              onClick={handleGoBack}
            />
          </button>

          <h5 className="main__header--title">{questions.topic}</h5>
        </div>

        <article className='main__question'>
          <p>{currentQuestion.question}</p>
        </article>

        <div className='main__options'>
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`main__option ${selectedAnswer === option ? (isAnswerCorrect ? 'main__option--correct' : 'main__option--wrong') : ''}`}
              value={option}
              checked={selectedAnswer === option}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
            >
              <label>
                <input
                  className='main__option--input'
                  type='radio'
                  name='answer'
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                />
              </label>

              <p className='main__option--text'>{option}</p>
            </div>
          ))}
        </div>

        <div className='main__footer'>
          {isAnswered && !isAnswerCorrect && (
            <div className='explanation'>
              <p>Incorrect! The correct answer is: {currentQuestion.correctAnswer}</p>
            </div>
          )}

          {isAnswered && (
            <button 
              className='button button--next'
              onClick={handleNextQuestion}>
              {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
            </button>
          )}
        </div>

        {isQuizFinished && modalOpen && createPortal(
          <ResultModal
            isOpen={isQuizFinished} 
            correctCount={correctCount} 
            totalQuestions={questions.length} 
            onRetry={handleRetry} 
            onGoBack={handleGoBack}
            onClose={handleButtonClick}
          />,
          document.body
        )}
      </div>
    </>
  );
}
