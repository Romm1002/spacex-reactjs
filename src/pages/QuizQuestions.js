import React, { useState } from 'react';
import quizzesData from '../data/data.json';
import { useParams } from 'react-router-dom';

const QuizQuestions = () => {
  const { id } = useParams();
  const quizzes = quizzesData.quizzes;
  const quiz = quizzes[id];

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Fonction pour mélanger les options dans un ordre aléatoire
  const shuffleOptions = (options) => {
    const shuffledOptions = [...options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [
        shuffledOptions[j],
        shuffledOptions[i],
      ];
    }
    return shuffledOptions;
  };

  // Gérer la sélection de réponse
  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(updatedAnswers);
  };

  // Gérer la soumission des réponses
  const handleSubmit = () => {
    setShowResults(true);
  };

  // Vérifier si une réponse est correcte ou incorrecte
  const isAnswerCorrect = (questionIndex, selectedOption) => {
    const correctAnswer = quiz.questions[questionIndex].correctAnswer;
    return selectedOption === correctAnswer;
  };

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>
          {shuffleOptions(question.options).map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="radio"
                id={`option-${questionIndex}-${optionIndex}`}
                name={`question-${questionIndex}`}
                value={option}
                onChange={() => handleAnswerSelect(questionIndex, option)}
              />
              <label htmlFor={`option-${questionIndex}-${optionIndex}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>

      {showResults && (
        <div>
          <h3>Résultats :</h3>
          {quiz.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <p>{question.question}</p>
              <p>
                Votre réponse : {selectedAnswers[questionIndex] || 'Non répondu'}
              </p>
              {isAnswerCorrect(questionIndex, selectedAnswers[questionIndex]) ? (
                <p>Correct!</p>
              ) : (
                <p>Incorrect. La réponse correcte est : {question.correctAnswer}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizQuestions;
