import { useContext } from "react";

import PlayerStateContext from "../../../../contexts/playerContexts/PlayerStateContext";

import classes from "./AudioButtons.module.css";
import playImg from "./../../../../imgs/play.png";
import playImgHover from "./../../../../imgs/play-hover.png";
import pauseImg from "./../../../../imgs/pause.png";
import pauseImgHover from "./../../../../imgs/pause-hover.png";

function PlayOrPause() {
  const playerStateCtx = useContext(PlayerStateContext);

  function playVideo() {
    playerStateCtx.play();
  }

  function pauseVideo() {
    playerStateCtx.pause();
  }

  return (
    <>
      {(playerStateCtx.getPlayerState() === 1 ||
        playerStateCtx.getPlayerState() > 2) && (
        <div
          className={classes.pause}
          onMouseOver={(event) =>
            (event.currentTarget.firstChild.src = pauseImgHover)
          }
          onMouseOut={(event) =>
            (event.currentTarget.firstChild.src = pauseImg)
          }
          onClick={pauseVideo}
        >
          <img src={pauseImg} alt="" />
        </div>
      )}
      {(playerStateCtx.getPlayerState() < 1 ||
        playerStateCtx.getPlayerState() === 2) && (
        <div
          className={classes.play}
          onMouseOver={(event) =>
            (event.currentTarget.firstChild.src = playImgHover)
          }
          onMouseOut={(event) => (event.currentTarget.firstChild.src = playImg)}
          onClick={playVideo}
        >
          <img src={playImg} alt="" />
        </div>
      )}
    </>
  );
}

export default PlayOrPause;
