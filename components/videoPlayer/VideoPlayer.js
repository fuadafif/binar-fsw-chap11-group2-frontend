import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const sources = {
  tournament:
    "https://www.youtube.com/watch?v=qjTdZdgDH_A&ab_channel=LoLEsports",
};

const Video = (props) => {
  const ref = useRef();

  const [source, setSource] = useState(sources.tournament);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const mute = () => setMuted(true);
  const unmute = () => setMuted(false);

  return (
    <div>
      <div className={"mx-auto p-0 position-relative col-lg-6"}>
        <ReactPlayer
          ref={ref}
          url={source}
          playing={playing}
          muted={muted}
          unmute={unmute}
        />
      </div>

      <br />

      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={mute}>Mute</button>
        <button onClick={unmute}>Unmute</button>
      </div>
    </div>
  );
};

export default Video;
