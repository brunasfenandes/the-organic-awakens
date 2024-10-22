import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizPage.scss';

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const port = import.meta.env.VITE_PORT;
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const getQuestions = async () => {
    try {
      const { data } = await axios.get(`${backendURL}:${port}/questions`);
      setQuestions(data);
      console.log(data);
    } catch (error) {
      console.error('Error getting questions:', error);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    setIsAnswerCorrect(option === questions[currentQuestionIndex].correctAnswer);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsAnswerCorrect(null);
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1)); 
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='main'>
      <article className='main__question'>
        <p>{currentQuestion.question}</p>
      </article>

      <div className='main__options'>
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`main__option ${selectedAnswer === option ? (isAnswerCorrect ? 'main__option--correct' : 'main__option--wrong') : ''}`}
          >
            <label>
              <input
                type='radio'
                name='answer'
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelect(option)}
                disabled={isAnswered}
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      {isAnswered && !isAnswerCorrect && (
        <div className='explanation'>
          <p>Incorrect! The correct answer is: {currentQuestion.correctAnswer}</p>
        </div>
      )}

      {isAnswered && (
        <button onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
}
