import { createContext, useContext, useState } from "react";
import PlayerContext from "./PlayerContext";

const PlayerStateContext = createContext();

export function PlayerStateContextProvider(props) {
  const playerCtx = useContext(PlayerContext);

  const [playerState, setPlayerState] = useState(0);

  // Video State
  function getPlayerStateHandler() {
    return playerState;
  }

  function updatePlayerStateHandler() {
    setPlayerState(playerCtx.player.getPlayerState());
  }

  function playHandler() {
    playerCtx.player.playVideo();
  }

  function pauseHandler() {
    playerCtx.player.pauseVideo();
  }

  const context = {
    getPlayerState: getPlayerStateHandler,
    updatePlayerState: updatePlayerStateHandler,
    play: playHandler,
    pause: pauseHandler,
  };

  return (
    <PlayerStateContext.Provider value={context}>
      {props.children}
    </PlayerStateContext.Provider>
  );
}

export default PlayerStateContext;
