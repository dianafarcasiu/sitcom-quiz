function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;

  return (
    <div className="inline-flex flex-col gap-4 w-full ">
      {question.options.map((option, index) => (
        <button
          className={`btn text-start px-6 transition-transform ${
            !hasAnswered ? "btn-hover hover:translate-x-3" : ""
          } ${index === answer ? "translate-x-6" : ""} ${
            (hasAnswered &&
              index === question.correctOption &&
              "bg-lime-700") ||
            (hasAnswered && index !== question.correctOption && "bg-amber-700")
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
