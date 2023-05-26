import React from 'react'

const Options = ({ options, selectedOption, handleOptionSelect }) => {
    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type='radio'
                        id={`option-${index}`}
                        name='options'
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionSelect(option)}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                </div>
            ))}
        </div>
    )
}

export default Options
