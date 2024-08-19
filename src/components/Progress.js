import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numOfQuestions, points, maxPoints, answer } = useQuiz();
  return (
    <>
      <progress
        className="w-full h-2"
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      />
      <div className="flex justify-between mb-6 mt-2 text-sm">
        <p>
          Question {index + 1} / {numOfQuestions}
        </p>
        <p>
          {points} / {maxPoints}
        </p>
      </div>
    </>
  );
}

export default Progress;
