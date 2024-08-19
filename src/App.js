import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";

import MusicPlayer from "./components/MusicPlayer";
import { useQuiz } from "./contexts/QuizContext";

function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <MusicPlayer />

      {status === "ready" && <StartScreen />}

      {status === "active" && (
        <div className="page-w">
          <Progress />
          <Question />
          <div className="mt-10 flex justify-between">
            <Timer />
            <NextButton />
          </div>
        </div>
      )}

      {status === "finished" && <FinishScreen />}
    </div>
  );
}

export default App;
