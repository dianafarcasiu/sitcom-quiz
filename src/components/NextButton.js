import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, index, dispatch, numOfQuestions } = useQuiz();
  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <button
        className="btn btn-hover px-6"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        className="btn btn-hover px-6"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
