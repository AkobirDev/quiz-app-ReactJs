import React from "react";

const QuizMain = ({
  currentQue,
  QuizData,
  clicked,
  handleAnswerOption,
  //   selectedAnswer,
}) => {
  return (
    <section>
      <div className="que_text">{QuizData[currentQue].question}</div>
      <div className="option_list">
        {QuizData[currentQue].answersOption.map((answer, i) => {
          return (
            <button
              className={clicked ? "option disabled" : "option"}
              //   className="option"
              key={i}
              onClick={(e) => handleAnswerOption(answer.isCorrect, e)}
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
