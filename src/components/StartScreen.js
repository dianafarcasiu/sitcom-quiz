import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numOfQuestions, dispatch } = useQuiz();
  return (
    <div className="w-1/3 m-auto mt-16">
      <p className="md:text-lg font-bold pb-16">
        Test your knowledge with {numOfQuestions} awesome questions from the
        most beloved sitcoms of all times!
      </p>
      <button
        className="btn btn-hover px-4"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
