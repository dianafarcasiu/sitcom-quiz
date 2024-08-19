import { createContext, useContext, useReducer } from "react";
import questions from "../data/questions";

const QuizContext = createContext();

const SECS_PER_QUESTION = 15;

const initialState = {
  // ready, active, finished
  status: "ready",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: questions.length * SECS_PER_QUESTION,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, status: "active", highscore: state.highscore };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action unknown.");
  }
}

function QuizProvider({ children }) {
  const [
    { status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const question = questions[index];
  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        question,
        numOfQuestions,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext used outside the QuizProvider.");
  return context;
}

export { QuizProvider, useQuiz };
