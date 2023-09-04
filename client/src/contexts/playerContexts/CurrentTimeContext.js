import { createContext, useContext, useState } from "react";
import PlayerContext from "./PlayerContext";
import PlayerStateContext from "./PlayerStateContext";

const CurrentTimeContext = createContext();

export function CurrentTimeContextProvider(props) {
  console.log("Current Time Context Re-rendered");
  const playerCtx = useContext(PlayerContext);
  const playerStateCtx = useContext(PlayerStateContext);

  const [currentTime, setCurrentTime] = useState(0);
  console.log(`Player State: ${playerStateCtx.getPlayerState()}`);
  console.log(currentTime);

  // useEffect(() => {
  //   if (playerCtx.getIsPlayerReady()) {
  //     setCurrentTime(0);
  //   }
  // }, [playerCtx]);

  // Video Current Time
  function getCurrentTimeHandler() {
    return currentTime;
  }

  function setCurrentTimeHandler(time) {
    setCurrentTime(time);
  }

  function updateCurrentTimeHandler() {
    if (playerCtx.getIsPlayerReady()) {
      setCurrentTime(parseInt(playerCtx.player.getCurrentTime()));
    }
  }

  function seekToTimeHandler(seconds, allowSeekAhead) {
    playerCtx.player.seekTo(seconds, allowSeekAhead);
    setCurrentTime(seconds);
  }

  const context = {
    getCurrentTime: getCurrentTimeHandler,
    setCurrentTime: setCurrentTimeHandler,
    updateCurrentTime: updateCurrentTimeHandler,
    seekToTime: seekToTimeHandler,
  };

  return (
    <CurrentTimeContext.Provider value={context}>
      {props.children}
    </CurrentTimeContext.Provider>
  );
}

export default CurrentTimeContext;
