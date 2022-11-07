import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./quiz.css";
import QuizData from "./QuizData";
import QuizFooter from "./QuizFooter";
import QuizMain from "./QuizMain";
import QuizResult from "./QuizResult";

const Quiz = () => {
  //-------------- UseStates -------------

  const [currentQue, setCurrentQue] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
  });
  // -------------- Functions --------------
  const handleAnswerOption = (isCorrect) => {
    if (isCorrect) {
      setCorrect(correct + 1);
    }
    setClicked(true);
  };

  const handleReset = () => {
    setClicked(false);
    setCurrentQue(0);
    setCorrect(0);
  };

  const handleNextBtn = () => {
    setClicked(false);
    setCurrentQue(currentQue + 1);
  };

  return (
    <section className="quiz">
      {QuizData[currentQue] ? (
        <div className="quiz_box">
          <header>
            <div className="title">Awesome Quiz Application</div>

            <div className="time_line"></div>
          </header>
          <QuizMain
            currentQue={currentQue}
            QuizData={QuizData}
            clicked={timer > 0 ? clicked : !clicked}
            handleAnswerOption={handleAnswerOption}
          />

          <QuizFooter
            currentQue={currentQue}
            QuizData={QuizData}
            clicked={clicked}
            handleNextBtn={handleNextBtn}
          />
        </div>
      ) : (
        <QuizResult correct={correct} handleReset={handleReset} />
      )}
    </section>
  );
};

export default Quiz;
