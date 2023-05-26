import React from 'react'
import quizzesData from '../data/data.json'
import { Link } from 'react-router-dom'

const Quizs = () => {
    const quizzes = quizzesData.quizzes

    return (
        <div>
            <h1>Quizzes on space exploration</h1>
            {quizzes.map((quiz, index) => (
                <div key={index}>
                    <Link to={`/quiz/${index}`}>
                        <h2>{quiz.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Quizs
