import { useContext } from "react";

import PlayerContext from "../../../../contexts/PlayerContext";

import classes from "./AudioButtons.module.css";
import playImg from "./../../../../imgs/play.png";
import playImgHover from "./../../../../imgs/play-hover.png";
import pauseImg from "./../../../../imgs/pause.png";
import pauseImgHover from "./../../../../imgs/pause-hover.png";

function PlayOrPause() {
  const playerCtx = useContext(PlayerContext);

  function playVideo() {
    playerCtx.play();
  }

  function pauseVideo() {
    playerCtx.pause();
  }

  return (
    <>
      {(playerCtx.getPlayerState() === 1 || playerCtx.getPlayerState() > 2) && (
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
      {(playerCtx.getPlayerState() < 1 || playerCtx.getPlayerState() === 2) && (
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
