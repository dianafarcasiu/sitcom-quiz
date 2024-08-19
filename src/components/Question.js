import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { question } = useQuiz();
  return (
    <div className="">
      <h1 className="text-lg pb-10 font-extrabold">{question.question}</h1>

      <Options />
    </div>
  );
}

export default Question;
