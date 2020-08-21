import React from 'react'
import './styles/index.scss'

function App() {
  return (
    <div className="container">
      <main className="game">
        <h1 className="game__title">How fast can you type?</h1>

        <div className="game__content">
          <textarea
            name="text"
            placeholder="start typing here..."
            className="game__content__text"
          />

          <h3 className="game__timeRemaining">Time remaining: 10s</h3>

          <button className="game__startBtn">start game</button>

          <h3 className="game__wordCount">word count: 0</h3>
        </div>
      </main>
    </div>
  )
}

export default App
