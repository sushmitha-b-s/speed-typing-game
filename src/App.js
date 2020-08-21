/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './styles/index.scss'

function App() {
  const TIME_REMAINING = 5
  const INITIAL_WORD_COUNT = 0

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIME_REMAINING)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [wordCount, setWordCount] = useState(INITIAL_WORD_COUNT)

  const handleChange = (e) => {
    const { value } = e.target

    setText(value)
  }

  const calculateWords = (text) => {
    const totalWords = text.trim().split(' ')

    return totalWords.filter((word) => word !== '').length
  }

  const startGame = (e) => {
    setIsGameStarted(true)
    setTimeRemaining(TIME_REMAINING)
    setWordCount(INITIAL_WORD_COUNT)
    setText('')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const endGame = () => {
    setWordCount(calculateWords(text))
    setIsGameStarted(false)
  }

  useEffect(() => {
    if (timeRemaining > 0 && isGameStarted) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, isGameStarted])

  return (
    <div className="container">
      <main className="game">
        <h1 className="game__title">How fast can you type?</h1>

        <div className="game__content">
          <textarea
            name="text"
            value={text}
            onChange={handleChange}
            placeholder={
              isGameStarted
                ? 'start typing here...'
                : 'click the below button to start the game.'
            }
            className="game__content__text"
            disabled={!isGameStarted}
          />

          <h3 className="game__timeRemaining">
            Time remaining: {timeRemaining}s
          </h3>

          <button
            className="game__startBtn"
            onClick={startGame}
            disabled={isGameStarted}
          >
            start game
          </button>

          <h3 className="game__wordCount">word count: {wordCount}</h3>
        </div>
      </main>
    </div>
  )
}

export default App
