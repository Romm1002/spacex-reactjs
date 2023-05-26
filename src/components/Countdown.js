import React, { useState, useEffect } from 'react'

const Countdown = ({ time, onTimeout }) => {
    const [seconds, setSeconds] = useState(time)

    useEffect(() => {
        if (seconds > 0) {
            const countdownInterval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1)
            }, 1000)

            return () => clearInterval(countdownInterval)
        } else {
            onTimeout() // Trigger onTimeout callback when countdown reaches 0
        }
    }, [seconds, onTimeout])

    return (
        <div>{seconds === 0 ? <p>Time's up!</p> : <p>Time remaining: {seconds} second(s)</p>}</div>
    )
}

export default Countdown
