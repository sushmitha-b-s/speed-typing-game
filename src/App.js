import React from 'react'
import './styles/index.scss'
import useSpeedTypingGame from './customHooks/useSpeedTypingGame'

function App() {
  const {
    text,
    handleChange,
    textRef,
    isGameStarted,
    timeRemaining,
    startGame,
    wordCount,
    disableKeys,
  } = useSpeedTypingGame()

  return (
    <div className="container">
      <main className="game">
        <h1 className="game__title">How fast can you type?</h1>

        <div className="game__content">
          <textarea
            name="text"
            value={text}
            onChange={handleChange}
            ref={textRef}
            placeholder={
              isGameStarted
                ? 'start typing here...'
                : 'click the below button to start the game.'
            }
            className="game__content__text"
            disabled={!isGameStarted}
            onCopy={disableKeys}
            onPaste={disableKeys}
            onCut={disableKeys}
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

          <h3 className="game__wordCount">
            word count: {wordCount ? wordCount : '???'}
          </h3>
        </div>
      </main>
    </div>
  )
}

export default App
