import React, { useState } from 'react'
import Question from './Question'

const Quiz = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)

    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex]
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore(score + 1)
        }

        const nextQuestionIndex = currentQuestionIndex + 1
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex)
        } else {
            // Quiz completed, show results
            // You can add your logic here to display the final score and results
        }
    }

    return (
        <div className={'text-center mx-auto w-50'}>
            {currentQuestionIndex < questions.length && (
                <Question
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    handleAnswer={handleAnswer}
                />
            )}
        </div>
    )
}

export default Quiz
