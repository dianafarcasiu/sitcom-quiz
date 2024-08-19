import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  const percentage = parseFloat(((points / maxPoints) * 100).toFixed(2));

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage >= 80) emoji = "🤩";
  if (percentage < 80 && percentage >= 50) emoji = "🤔";
  if (percentage < 50 && percentage >= 0) emoji = "🫠";
  if (percentage === 0) emoji = "🫤";
  return (
    <>
      <p className="btn px-4 mt-20 mb-8 text-lg font-bold page-w">
        <span>{emoji} </span> You scored {points} out of {maxPoints}. (
        {percentage}%)
      </p>
      <p>- Highscore: {highscore} -</p>

      <button
        className="btn btn-hover px-4 mt-24"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
