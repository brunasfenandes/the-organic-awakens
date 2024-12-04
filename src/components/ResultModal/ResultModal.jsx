import React from 'react';
import close from '../../assets/icons/close-24px.svg'
import './ResultModal.scss';

export default function ResultModal({ isOpen, correctCount, totalQuestions, onRetry, onGoBack, onClose }) {
  if (!isOpen) return null;

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div 
      className="modal-container" 
      onClick={(e) => {
        if(e.target.className === 'modal-container') {
          onClose();
        }
      }}
    >
      <div className="modal">
        <div className='modal__header'>
          <button 
            className="modal__button modal__button--close" 
            onClick={() => onClose()}
          >
            <img 
              className='modal__header--close'
              src={close}
              alt='Close Icon'
            />
          </button>
        </div>

        <div className='modal__content'>
          <div className='modal__text'>
            <h2>Quiz Finished!</h2>
            <p>You got {correctCount} out of {totalQuestions} questions correct.</p>
            <p>Your score: {percentage}%</p>
          </div>

          <div className="modal__footer">
            <button 
              className="modal__button modal__button--goback"
              onClick={onGoBack}
            >
              Back to Quiz List
            </button>

            <button
              className="modal__button modal__button--retry" 
              onClick={onRetry}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}