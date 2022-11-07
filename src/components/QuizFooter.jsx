import React from "react";

const QuizFooter = ({ currentQue, QuizData, clicked, handleNextBtn }) => {
  return (
    <>
      <footer>
        <div className="total_que">
          {currentQue + 1}/{QuizData.length}
        </div>
        <button
          className="next_btn show"
          disabled={!clicked}
          onClick={handleNextBtn}
        >
          Next Que
        </button>
      </footer>
    </>
  );
};

export default QuizFooter;
