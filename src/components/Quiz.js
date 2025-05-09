// Student Name - Navdeep Kaur
import React, { useState, useEffect } from "react";
import "../css/quiz.css";
// Data from quiz questions is organized by topic
const quizData = {
  React: [
    {
      question: "What is JSX?",
      options: [
        "A templating engine",
        "A CSS preprocessor",
        "JavaScript XML",
        "React component",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "React is developed by?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "What is the purpose of useState in React?",
      options: [
        "To manage styling",
        "To fetch data",
        "To manage state",
        "To route pages",
      ],
      answer: "To manage state",
    },
    {
      question:
        "Which hook is used for performing side effects in functional components?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      answer: "useEffect",
    },
    {
      question: "What is a key prop in React used for?",
      options: [
        "Styling components",
        "Identifying unique elements in a list",
        "Defining routes",
        "Creating forms",
      ],
      answer: "Identifying unique elements in a list",
    },
  ],
  JavaScript: [
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["/* */", "//", "#", "<!-- -->"],
      answer: "//",
    },
    {
      question: "Which method converts JSON to JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "None"],
      answer: "JSON.parse()",
    },
    {
      question: 'What will "typeof null" return in JavaScript?',
      options: ["object", "null", "undefined", "number"],
      answer: "object",
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["Float", "Number", "Decimal", "Char"],
      answer: "Number",
    },
    {
      question: 'What is the output of "2" + 2 in JavaScript?',
      options: ["4", "22", "NaN", "undefined"],
      answer: "22",
    },
  ],
};
// The functional component of the quiz
const Quiz = () => {
  const [tab, setTab] = useState("React"); // Currently selected topic
  const [answers, setAnswers] = useState({}); // Answers selected by the user
  const [submitted, setSubmitted] = useState(false); //submission status
  const [timeLeft, setTimeLeft] = useState(65); // countdown timer 

  // Manages answer selection
  const handleOptionChange = (question, selected) => {
    setAnswers({ ...answers, [question]: selected });
  };
  // Manages quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };
  // Timer logic with useEffect
  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, submitted]);
  // Retrieve the questions for the current tab or topic
  const questions = quizData[tab];
  // count the number of correct answers
  const correctAnswers = questions.filter(
    (q) => answers[q.question] === q.answer
  ).length;

  return (
    <>
      <header className="quiz-header">
        <div className="overlay">
          <h1>Quiz</h1>
        </div>
      </header>
      <section className="quiz">
        <h2>{tab} Quiz</h2>
        <div className="tabs">
          {Object.keys(quizData).map((topic) => (
            <button
              key={topic}
              onClick={() => {
                setTab(topic);
                setAnswers({});
                setSubmitted(false);
                setTimeLeft(65);
              }}
              className={tab === topic ? "active" : ""}
            >
              {topic}
            </button>
          ))}
        </div>
        {!submitted ? (
          <>
            <p>Time left: {timeLeft}s</p>
            {questions.map((q, idx) => (
              <div key={idx} className="question">
                <p>{q.question}</p>
                {q.options.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={q.question}
                      value={option}
                      checked={answers[q.question] === option}
                      onChange={() => handleOptionChange(q.question, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
          </>
        ) : (
          // Display the results
          <div className="result">
            <h3>Results</h3>
            <p>
              You scored {correctAnswers} out of {questions.length}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Quiz;
