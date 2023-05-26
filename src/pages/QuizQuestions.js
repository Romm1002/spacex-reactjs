import React, { useState, useEffect } from 'react'
import quizzesData from '../data/data.json'
import { useParams } from 'react-router-dom'
import { shuffle } from 'lodash'

const QuizQuestions = () => {
    const { id } = useParams()
    const quizzes = quizzesData.quizzes
    const quiz = quizzes[id]
    const questionCount = quiz.questions.length

    const [selectedAnswers, setSelectedAnswers] = useState(Array(questionCount).fill(null))
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [showResults, setShowResults] = useState(false)
    const [timer, setTimer] = useState(30)
    const [shuffledOptions, setShuffledOptions] = useState([])
    const [score, setScore] = useState(0)
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)

    useEffect(() => {
        setShuffledOptions(shuffle(quiz.questions[currentQuestionIndex].options))
    }, [currentQuestionIndex, quiz.questions])

    useEffect(() => {
        let countdown

        if (!showResults && currentQuestionIndex < questionCount) {
            countdown = setTimeout(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000)
        }

        return () => clearTimeout(countdown)
    }, [timer, showResults, currentQuestionIndex, questionCount])

    useEffect(() => {
        if (timer === 0) {
            handleNextQuestion()
        }
        // eslint-disable-next-line
    }, [timer])

    const handleAnswerSelect = (selectedOption, optionIndex) => {
        const updatedAnswers = [...selectedAnswers]
        updatedAnswers[currentQuestionIndex] = selectedOption
        setSelectedAnswers(updatedAnswers)

        if (isAnswerCorrect(currentQuestionIndex, selectedOption)) {
            setScore((prevScore) => prevScore + 1)
        }

        setSelectedOptionIndex(optionIndex)
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionCount - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
            setTimer(30) // Réinitialiser le compte à rebours
            setSelectedOptionIndex(-1) // Réinitialiser l'index de l'option sélectionnée
        } else {
            setShowResults(true)
        }
    }

    const isAnswerCorrect = (questionIndex, selectedOption) => {
        const correctAnswer = quiz.questions[questionIndex].correctAnswer
        return selectedOption === correctAnswer
    }

    const progress = ((currentQuestionIndex + 1) / questionCount) * 100

    return (
        <div className='quiz'>
            <h2 className='quiz-title'>{quiz.title}</h2>
            <div className='progress-bar'>
                <div
                    className='progress'
                    style={{
                        width: `${progress}%`,
                        backgroundColor: 'lightblue',
                        marginBottom: '1rem',
                    }}
                ></div>
            </div>
            {showResults ? (
                <div>
                    <h3>Résultats :</h3>
                    {quiz.questions.map((question, questionIndex) => (
                        <div key={questionIndex}>
                            <p>{question.question}</p>
                            <p>Votre réponse : {selectedAnswers[questionIndex] || 'Non répondu'}</p>
                            {isAnswerCorrect(questionIndex, selectedAnswers[questionIndex]) ? (
                                <p>Correct!</p>
                            ) : (
                                <p>Incorrect. La réponse correcte est : {question.correctAnswer}</p>
                            )}
                        </div>
                    ))}
                    <p>
                        Score : {score}/{questionCount}
                    </p>
                </div>
            ) : (
                <div className='questions'>
                    <h4>{quiz.questions[currentQuestionIndex].question}</h4>
                    <div className='ligne'>
                        {shuffledOptions.map((option, optionIndex) => (
                            <div
                                key={optionIndex}
                                className={`option ${
                                    optionIndex === selectedOptionIndex ? 'active' : ''
                                }`}
                            >
                                <input
                                    type='radio'
                                    id={`option-${currentQuestionIndex}-${optionIndex}`}
                                    name={`question-${currentQuestionIndex}`}
                                    value={option}
                                    checked={selectedAnswers[currentQuestionIndex] === option}
                                    onChange={() => handleAnswerSelect(option, optionIndex)}
                                />
                                <label htmlFor={`option-${currentQuestionIndex}-${optionIndex}`}>
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontWeight: 'bold' }}>Remaining time : {timer} seconds</p>
                    <button className='btnNext' onClick={handleNextQuestion}>
                        Next
                    </button>
                </div>
            )}
        </div>
    )
}

export default QuizQuestions
