import { useContext } from "react";
import YouTube from "react-youtube";

import PlayerContext from "../../../contexts/playerContexts/PlayerContext";
import PlayerStateContext from "../../../contexts/playerContexts/PlayerStateContext";
import DurationContext from "../../../contexts/playerContexts/DurationContext";
import QueueContext from "../../../contexts/QueueContext";

function YTAudioPlayer() {
  console.log("YTAudioPlayer re-rendered");
  const queueCtx = useContext(QueueContext);
  const playerCtx = useContext(PlayerContext);
  const playerStateCtx = useContext(PlayerStateContext);
  const durationCtx = useContext(DurationContext);

  function onReady(event) {
    console.log("Song Ready to Play");
    event.target.setVolume(100);
    durationCtx.setDuration(event.target.getDuration());
    playerCtx.updatePlayer(event.target);
    event.target.playVideo();
  }

  function onStateChange() {
    playerStateCtx.updatePlayerState();
  }

  return (
    <>
      <YouTube
        videoId={queueCtx.queue.current[queueCtx.currentSong].videoID}
        id="player"
        onReady={onReady}
        onStateChange={onStateChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default YTAudioPlayer;
