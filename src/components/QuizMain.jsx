import React from "react";

const QuizMain = ({ currentQue, QuizData, clicked, handleAnswerOption }) => {
  return (
    <section>
      <div className="que_text">{QuizData[currentQue].question}</div>
      <div className="option_list">
        {QuizData[currentQue].answersOption.map((answer, i) => {
          return (
            <button
              //   className={clicked ? "option disabled" : "option"}
              className="option"
              key={i}
              onClick={() => handleAnswerOption(answer.isCorrect)}
            >
              {answer.answerText}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuizMain;
