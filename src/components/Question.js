import Options from "./Options";

function Question({ question, answer, dispatch }) {
  return (
    <div className="">
      <h1 className="text-lg pb-10 font-extrabold">{question.question}</h1>

      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
