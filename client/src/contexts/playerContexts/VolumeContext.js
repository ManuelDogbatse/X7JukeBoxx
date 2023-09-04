import { createContext, useContext, useState } from "react";
import PlayerContext from "./PlayerContext";

const VolumeContext = createContext();

export function VolumeContextProvider(props) {
  const playerCtx = useContext(PlayerContext);

  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(100);

  // Volume and Mute
  function getVolumeHandler() {
    return volume;
  }

  function setVolumeHandler(newVolume) {
    playerCtx.player.setVolume(newVolume);
    setVolume(newVolume);
  }

  function getIsMutedHandler() {
    return isMuted;
  }

  function muteHandler() {
    playerCtx.player.mute();
    setIsMuted(true);
  }

  function unMuteHandler() {
    playerCtx.player.unMute();
    setIsMuted(false);
  }

  const context = {
    getVolume: getVolumeHandler,
    setVolume: setVolumeHandler,
    getIsMuted: getIsMutedHandler,
    mute: muteHandler,
    unMute: unMuteHandler,
  };

  return (
    <VolumeContext.Provider value={context}>
      {props.children}
    </VolumeContext.Provider>
  );
}

export default VolumeContext;
