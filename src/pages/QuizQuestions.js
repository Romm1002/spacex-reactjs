import React, { useState, useEffect } from 'react';
import quizzesData from '../data/data.json';
import { useParams } from 'react-router-dom';
import { shuffle } from 'lodash';

const QuizQuestions = () => {
  const { id } = useParams();
  const quizzes = quizzesData.quizzes;
  const quiz = quizzes[id];
  const questionCount = quiz.questions.length;

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questionCount).fill(null)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(30);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setShuffledOptions(shuffle(quiz.questions[currentQuestionIndex].options));
  }, [currentQuestionIndex, quiz.questions]);

  useEffect(() => {
    let countdown;

    if (!showResults && currentQuestionIndex < questionCount) {
      countdown = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearTimeout(countdown);
  }, [timer, showResults, currentQuestionIndex, questionCount]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer]);

  const handleAnswerSelect = (selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
    setTimer(30); // Réinitialiser le compte à rebours
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionCount - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(30); // Réinitialiser le compte à rebours
    } else {
      setShowResults(true);
    }
  };

  const isAnswerCorrect = (questionIndex, selectedOption) => {
    const correctAnswer = quiz.questions[questionIndex].correctAnswer;
    return selectedOption === correctAnswer;
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      {showResults ? (
        <div>
          <h3>Résultats :</h3>
          {quiz.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <p>{question.question}</p>
              <p>
                Votre réponse :{' '}
                {selectedAnswers[questionIndex] || 'Non répondu'}
              </p>
              {isAnswerCorrect(questionIndex, selectedAnswers[questionIndex]) ? (
                <p>Correct!</p>
              ) : (
                <p>
                  Incorrect. La réponse correcte est :{' '}
                  {question.correctAnswer}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>{quiz.questions[currentQuestionIndex].question}</h3>
          {shuffledOptions.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type='radio'
                id={`option-${currentQuestionIndex}-${optionIndex}`}
                name={`question-${currentQuestionIndex}`}
                value={option}
                checked={selectedAnswers[currentQuestionIndex] === option}
                onChange={() => handleAnswerSelect(option)}
              />
              <label htmlFor={`option-${currentQuestionIndex}-${optionIndex}`}>
                {option}
              </label>
            </div>
          ))}
          <p>Temps restant : {timer} secondes</p>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
};

export default QuizQuestions;
