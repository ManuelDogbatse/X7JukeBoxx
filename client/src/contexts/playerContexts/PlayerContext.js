import { createContext, useState, useMemo } from "react";

const PlayerContext = createContext();

export function PlayerContextProvider(props) {
  console.log("Player Context Re-rendered");
  const [player, setPlayer] = useState({});

  const isPlayerReady = useMemo(() => {
    return Object.keys(player).length !== 0 && typeof player === "object";
  }, [player]);

  console.log(isPlayerReady);

  function updatePlayerHandler(newPlayer) {
    setPlayer(newPlayer);
  }

  function getIsPlayerReadyHandler() {
    return isPlayerReady;
  }

  const context = {
    player: player,
    updatePlayer: updatePlayerHandler,
    getIsPlayerReady: getIsPlayerReadyHandler,
  };

  return (
    <PlayerContext.Provider value={context}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContext;
