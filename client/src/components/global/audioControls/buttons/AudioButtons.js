import classes from "./AudioButtons.module.css";

// import PlayOrPause from "./PlayOrPause";
import PlayOrPause from "./PlayOrPause2";

import shuffleImg from "./../../../../imgs/shuffle.png";
import shuffleImgHover from "./../../../../imgs/shuffle-hover.png";
import prevSongImg from "./../../../../imgs/prev-song.png";
import prevSongImgHover from "./../../../../imgs/prev-song-hover.png";

import nextSongImg from "./../../../../imgs/next-song.png";
import nextSongImgHover from "./../../../../imgs/next-song-hover.png";
import loopImg from "./../../../../imgs/loop.png";
import loopImgHover from "./../../../../imgs/loop-hover.png";

function AudioButtons(props) {
  return (
    <div className={classes.container} id={props.pos}>
      <div
        className={classes.shuffle}
        onMouseOver={(event) =>
          (event.currentTarget.firstChild.src = shuffleImgHover)
        }
        onMouseOut={(event) =>
          (event.currentTarget.firstChild.src = shuffleImg)
        }
      >
        <img src={shuffleImg} alt="" />
      </div>
      <div
        className={classes.prev}
        onMouseOver={(event) =>
          (event.currentTarget.firstChild.src = prevSongImgHover)
        }
        onMouseOut={(event) =>
          (event.currentTarget.firstChild.src = prevSongImg)
        }
      >
        <img src={prevSongImg} alt="" />
      </div>
      <PlayOrPause />
      <div
        className={classes.next}
        onMouseOver={(event) =>
          (event.currentTarget.firstChild.src = nextSongImgHover)
        }
        onMouseOut={(event) =>
          (event.currentTarget.firstChild.src = nextSongImg)
        }
      >
        <img src={nextSongImg} alt="" />
      </div>
      <div
        className={classes.loop}
        onMouseOver={(event) =>
          (event.currentTarget.firstChild.src = loopImgHover)
        }
        onMouseOut={(event) => (event.currentTarget.firstChild.src = loopImg)}
      >
        <img src={loopImg} alt="" />
      </div>
    </div>
  );
}

export default AudioButtons;
