import React, { useState, useEffect } from "react";

import { Welcome, Result } from "../";
import axios from "axios";
import QuizScreen from "../QuizScreen";

const Quiz = props => {
  const [quizState, setQuizState] = useState("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizData, setQuizData] = useState(null);
  const [processedAnswers, setProcessedAnswers] = useState([]);

  const handleNext = (potentialAnswer, correctAnswer) => {
    if (questionIndex < 9) {
      setQuestionIndex(prevState => prevState + 1);
      setProcessedAnswers([
        ...processedAnswers,
        potentialAnswer === correctAnswer ? true : false
      ]);
    } else {
      setQuizState("result");
      setQuestionIndex(0);
    }
  };

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response => setQuizData(response.data.results))
      .catch(error =>
        // eslint-disable-next-line no-console
        console.error("Something went wrong while fetching quiz data", error)
      );
  }, []);

  let screen = <Welcome setQuizState={setQuizState} />;
  if (quizState === "welcome") {
    screen = <Welcome setQuizState={setQuizState} />;
  }

  if (quizData && quizState === "playing") {
    screen = (
      <QuizScreen
        questionText={quizData[questionIndex].question}
        incorrectAnswers={quizData[questionIndex].incorrect_answers}
        correctAnswer={quizData[questionIndex].correct_answer}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
        handleNext={handleNext}
      />
    );
  }

  if (quizState === "result") {
    screen = (
      <Result setQuizState={setQuizState} processedAnswers={processedAnswers} />
    );
  }

  return screen;
};

export default Quiz;
