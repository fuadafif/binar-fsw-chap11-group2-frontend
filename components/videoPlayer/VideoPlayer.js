import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const sources = {
  sintelTrailer: "www.youtube.com/455847a0-ab8a-43a8-b9c2-9b238bfa892f",
};

const Video = (props) => {
  const ref = useRef();

  const [source, setSource] = useState(sources.bunnyMovie);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const mute = () => setMuted(true);
  const unmute = () => setMuted(false);

  return (
    <div>
      <ReactPlayer ref={ref} url={source} playing={playing} muted={muted} />

      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={mute}>Mute</button>
      <button onClick={unmute}>Unmute</button>
    </div>
  );
};

export default Video;
