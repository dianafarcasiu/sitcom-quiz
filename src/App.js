import { useReducer } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";

import questions from "./data/questions";
import MusicPlayer from "./components/MusicPlayer";

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

function App() {
  const [
    { status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const MaxPoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );

  return (
    <div className="app">
      <Header />

      <MusicPlayer />

      {status === "ready" && (
        <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
      )}

      {status === "active" && (
        <div className="page-w">
          <Progress
            index={index}
            numOfQuestions={numOfQuestions}
            points={points}
            maxPoints={MaxPoints}
            answer={answer}
          />
          <Question
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
          <div className="mt-10 flex justify-between">
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
            <NextButton
              answer={answer}
              index={index}
              dispatch={dispatch}
              numOfQuestions={numOfQuestions}
            />
          </div>
        </div>
      )}

      {status === "finished" && (
        <FinishScreen
          points={points}
          maxPoints={MaxPoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default App;
