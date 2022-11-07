import React from "react";
import QuizData from "./QuizData";
const QuizResult = (props) => {
  return (
    <>
      <div className="result_box">
        <div className="icon">
          <i className="fas fa-crown"></i>
        </div>
        <div className="complete_text">You've completed the Quiz!</div>
        <div className="score_text">
          {props.correct}/{QuizData.length}
        </div>
        <div className="buttons">
          <button className="restart" onClick={props.handleReset}>
            Replay Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
