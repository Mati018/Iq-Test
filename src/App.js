import React, { useState, useEffect } from "react";
import "./App.css";
import "../assets/q1.svg";
import "../assets/q1a.svg";
import "../assets/q1b.svg";
import "../assets/q1c.svg";
import "../assets/q1d.svg";
import "../assets/q1e.svg";
import "../assets/q1f.svg";
import "../assets/q2.svg";
import "../assets/q2a.svg";
import "../assets/q2b.svg";
import "../assets/q2c.svg";
import "../assets/q2d.svg";
import "../assets/q2e.svg";
import "../assets/q2f.svg";
import "../assets/q3.svg";
import "../assets/q3a.svg";
import "../assets/q3b.svg";
import "../assets/q3c.svg";
import "../assets/q3d.svg";
import "../assets/q3e.svg";
import "../assets/q3f.svg";
import "../assets/q4.svg";
import "../assets/q4a.svg";
import "../assets/q4b.svg";
import "../assets/q4c.svg";
import "../assets/q4d.svg";
import "../assets/q4e.svg";
import "../assets/q4f.svg";
import "../assets/q5.svg";
import "../assets/q5a.svg";
import "../assets/q5b.svg";
import "../assets/q5c.svg";
import "../assets/q5d.svg";
import "../assets/q5e.svg";
import "../assets/q5f.svg";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      image: "../assets/q1.svg",
      text: "Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 0, src: "../assets/q1a.svg", isCorrect: false },
        { id: 1, src: "../assets/q1b.svg", isCorrect: false },
        { id: 2, src: "../assets/q1c.svg", isCorrect: true },
        { id: 3, src: "../assets/q1d.svg", isCorrect: false },
        { id: 4, src: "../assets/q1e.svg", isCorrect: false },
        { id: 5, src: "../assets/q1f.svg", isCorrect: false }
      ]
    },
    {
      image: "../assets/q2.svg",
      text: "Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 0, src: "../assets/q2a.svg", isCorrect: false },
        { id: 1, src: "../assets/q2b.svg", isCorrect: false },
        { id: 2, src: "../assets/q2c.svg", isCorrect: false },
        { id: 3, src: "../assets/q2d.svg", isCorrect: false },
        { id: 4, src: "../assets/q2e.svg", isCorrect: true },
        { id: 5, src: "../assets/q2f.svg", isCorrect: false }
      ]
    },
    {
      image: "../assets/q3.svg",
      text: "Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 0, src: "../assets/q3a.svg", isCorrect: false },
        { id: 1, src: "../assets/q3b.svg", isCorrect: false },
        { id: 2, src: "../assets/q3c.svg", isCorrect: false },
        { id: 3, src: "../assets/q3d.svg", isCorrect: false },
        { id: 4, src: "../assets/q3e.svg", isCorrect: false },
        { id: 5, src: "../assets/q3f.svg", isCorrect: true }
      ]
    },
    {
      image: "../assets/q4.svg",
      text: "Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 0, src: "../assets/q4a.svg", isCorrect: false },
        { id: 1, src: "../assets/q4b.svg", isCorrect: false },
        { id: 2, src: "../assets/q4c.svg", isCorrect: false },
        { id: 3, src: "../assets/q4d.svg", isCorrect: true },
        { id: 4, src: "../assets/q4e.svg", isCorrect: false },
        { id: 5, src: "../assets/q4f.svg", isCorrect: false }
      ]
    },
    {
      image: "../assets/q5.svg",
      text: "Which shape should be in the rightmost cell with a question mark?",
      options: [
        { id: 0, src: "../assets/q5a.svg", isCorrect: false },
        { id: 1, src: "../assets/q5b.svg", isCorrect: false },
        { id: 2, src: "../assets/q5c.svg", isCorrect: false },
        { id: 3, src: "../assets/q5d.svg", isCorrect: false },
        { id: 4, src: "../assets/q5e.svg", isCorrect: true },
        { id: 5, src: "../assets/q5f.svg", isCorrect: false }
      ]
    }
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setRunning(false);
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTime(0);
    setRunning(true);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="App" style={{ background: "#6b6fbc" }}>
      {showResults ? (
        <>
          <h1>Your Results</h1>
          <p>
            Test time:
            <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </p>
          <p>
            In this test you have {score} correct answers from{" "}
            {questions.length}.
          </p>
          <button onClick={() => restartGame()}>Restart game</button>
        </>
      ) : (
        <>
          <a className="current-question">{currentQuestion + 1}</a>
          <a className="total-question">/{questions.length}</a>
          <img
            className="question-photo"
            src={require(questions[currentQuestion].image).default}
          />

          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <>
                  <button onClick={() => optionClicked(option.isCorrect)}>
                    <img className="photo" src={require(option.src).default} />
                  </button>
                </>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
