import { useState } from "react";
import ReactPlayer from "react-player";

function MusicPlayer() {
  const musicUrls = [
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song1.mp3",
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song2.mp3",
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song3.mp3",
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song4.mp3",
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song5.mp3",
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song6.mp3",
    "https://github.com/dianafarcasiu/sitcom-quiz/releases/download/v1.0/song7.mp3",
  ];
  const [index, setIndex] = useState(0);
  const url = musicUrls[index];

  function nextSong() {
    setIndex((index) => (index + 1) % musicUrls.length);
  }
  function prevSong() {
    setIndex((index) => (index - 1 + musicUrls.length) % musicUrls.length);
  }
  return (
    <div className="fixed top-6 left-4 sm:top-10 sm:left-10 flex items-center bg-zinc-100 px-2 rounded-xl">
      <button className="control-btn" onClick={prevSong}>
        {"<"}
      </button>
      <ReactPlayer
        controls={true}
        url={url}
        height="20px"
        width="250px"
        playing={true}
        onEnded={nextSong}
      />
      <button className="control-btn    " onClick={nextSong}>
        {">"}
      </button>
    </div>
  );
}

export default MusicPlayer;
