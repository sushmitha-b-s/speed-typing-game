import { useState, useEffect, useRef } from 'react'

const useSpeedTypingGame = () => {
  const TIME_REMAINING = 60
  const INITIAL_WORD_COUNT = 0

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIME_REMAINING)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [wordCount, setWordCount] = useState(INITIAL_WORD_COUNT)
  const textRef = useRef(null)

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

    textRef.current.disabled = false
    textRef.current.focus()
  }

  const endGame = (e) => {
    setWordCount(calculateWords(text))
    setIsGameStarted(false)
  }

  const disableKeys = (e) => {
    e.preventDefault()
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

  return {
    text,
    handleChange,
    textRef,
    isGameStarted,
    timeRemaining,
    startGame,
    wordCount,
    disableKeys,
  }
}

export default useSpeedTypingGame
