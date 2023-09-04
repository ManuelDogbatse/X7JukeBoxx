import { createContext, useContext, useState } from "react";
import PlayerContext from "./PlayerContext";

const DurationContext = createContext();

export function DurationContextProvider(props) {
  const playerCtx = useContext(PlayerContext);

  const [duration, setDuration] = useState(0);

  // Video Duration
  function getDurationHandler() {
    return duration;
  }

  function updateDurationHandler() {
    setDuration(playerCtx.player.getDuration());
  }

  function setDurationHandler(newDuration) {
    setDuration(newDuration);
  }

  const context = {
    getDuration: getDurationHandler,
    updateDuration: updateDurationHandler,
    setDuration: setDurationHandler,
  };

  return (
    <DurationContext.Provider value={context}>
      {props.children}
    </DurationContext.Provider>
  );
}

export default DurationContext;
