import React, { useState } from 'react'
import Options from './Options'
import Countdown from './Countdown'

const Question = ({ question, options, correctAnswer, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    const handleSubmit = () => {
        handleAnswer(selectedOption)
        setSelectedOption('')
    }

    return (
        <div>
            <h2>{question}</h2>
            <Options
                options={options}
                selectedOption={selectedOption}
                handleOptionSelect={handleOptionSelect}
            />
            <button onClick={handleSubmit}>Submit</button>
            <Countdown time={30} onTimeout={handleSubmit} />
        </div>
    )
}

export default Question
