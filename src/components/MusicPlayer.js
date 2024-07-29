import { useState } from "react";
import ReactPlayer from "react-player";

function MusicPlayer() {
  const musicUrls = [
    "/songs/song1.mp3",
    "/songs/song2.mp3",
    "/songs/song3.mp3",
    "/songs/song4.mp3",
    "/songs/song5.mp3",
    "/songs/song6.mp3",
    "/songs/song7.mp3",
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
