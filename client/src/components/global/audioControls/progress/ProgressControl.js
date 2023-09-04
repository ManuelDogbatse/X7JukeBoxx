import { useContext, useEffect, useState } from "react";

import classes from "./ProgressControl.module.css";

import { secondsToStr } from "../../../../functions/progress";
import CurrentTimeContext from "../../../../contexts/playerContexts/CurrentTimeContext";
import DurationContext from "../../../../contexts/playerContexts/DurationContext";
import PlayerStateContext from "../../../../contexts/playerContexts/PlayerStateContext";

function ProgressControl(props) {
  const currentTimeCtx = useContext(CurrentTimeContext);
  const durationCtx = useContext(DurationContext);
  const playerStateCtx = useContext(PlayerStateContext);

  const [counter, setCounter] = useState(0);
  const [isChangingProgress, setIsChangingProgress] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isKeyDown, setIsKeyDown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100);
    if (!isChangingProgress) {
      currentTimeCtx.updateCurrentTime();
    }
    return () => clearInterval(interval);
  }, [counter, currentTimeCtx, isChangingProgress]);

  function getSongProg() {
    if (isChangingProgress) {
      return seekTime;
    }
    return currentTimeCtx.getCurrentTime();
  }

  function changeSongProg(e) {
    if (isChangingProgress) {
      setSeekTime(e.target.value);
      return;
    }
  }

  function mouseDown() {
    if (
      playerStateCtx.getPlayerState() === 1 ||
      playerStateCtx.getPlayerState() > 2
    ) {
      playerStateCtx.pause();
    } else {
      setIsPaused(true);
    }
    setIsChangingProgress(true);
  }

  function mouseUp() {
    currentTimeCtx.seekToTime(seekTime, true);
    if (!isPaused) {
      playerStateCtx.play();
    } else {
      setIsPaused(false);
    }
    setIsChangingProgress(false);
  }

  function keyDown(e) {
    if (
      playerStateCtx.getPlayerState() === 1 ||
      playerStateCtx.getPlayerState() > 2
    ) {
      playerStateCtx.pause();
    } else if (!isKeyDown) {
      setIsPaused(true);
    }
    setIsKeyDown(true);
    setIsChangingProgress(true);
    // Left Arrow: 37, Right Arrow: 39
    if (e.keyCode === 37) {
      setSeekTime((seekTime) => seekTime--);
    } else if (e.keyCode === 39) {
      setSeekTime((seekTime) => seekTime++);
    }
  }

  function keyUp() {
    currentTimeCtx.seekToTime(seekTime, true);
    if (!isPaused) {
      playerStateCtx.play();
    } else {
      setIsPaused(false);
    }
    setIsKeyDown(false);
    setIsChangingProgress(false);
  }

  return (
    <div className={classes.container} id={props.pos}>
      <div id="songProg">
        <p>{secondsToStr(getSongProg(), durationCtx.getDuration())}</p>
      </div>
      <div className={classes.progSlider}>
        <input
          type="range"
          min="0"
          max={durationCtx.getDuration()}
          value={getSongProg()}
          onChange={changeSongProg}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          onKeyDown={keyDown}
          onKeyUp={keyUp}
        />
      </div>
      <div id="songLen">
        <p>{secondsToStr(durationCtx.getDuration())}</p>
      </div>
    </div>
  );
}

export default ProgressControl;
