import { useContext } from "react";

// import PlayerContext from "../../../../contexts/PlayerContext";
import VolumeContext from "../../../../contexts/playerContexts/VolumeContext";

import classes from "./VolumeControl.module.css";
import muteOnImg from "./../../../../imgs/mute-on.png";
import muteOnImgHover from "./../../../../imgs/mute-on-hover.png";
import muteOffOneImg from "./../../../../imgs/mute-off-1.png";
import muteOffOneImgHover from "./../../../../imgs/mute-off-1-hover.png";
import muteOffTwoImg from "./../../../../imgs/mute-off-2.png";
import muteOffTwoImgHover from "./../../../../imgs/mute-off-2-hover.png";
import muteOffThreeImg from "./../../../../imgs/mute-off-3.png";
import muteOffThreeImgHover from "./../../../../imgs/mute-off-3-hover.png";

function VolumeControl(props) {
  const volumeCtx = useContext(VolumeContext);

  function updateVolume(e) {
    volumeCtx.setVolume(e.target.value);
  }

  function muteVideo() {
    volumeCtx.mute();
  }

  function unMuteVideo() {
    // eslint-disable-next-line
    if (volumeCtx.getVolume() == 0) {
      return;
    }
    volumeCtx.unMute();
  }

  return (
    <div className={classes.container} id={props.pos}>
      {/* eslint-disable-next-line */}
      {(volumeCtx.getVolume() == 0 || volumeCtx.getIsMuted()) && (
        <div
          className={classes.mute}
          onMouseOver={(event) =>
            (event.currentTarget.firstChild.src = muteOnImgHover)
          }
          onMouseOut={(event) =>
            (event.currentTarget.firstChild.src = muteOnImg)
          }
          onClick={unMuteVideo}
        >
          <img src={muteOnImg} alt="" />
        </div>
      )}
      {volumeCtx.getVolume() > 0 &&
        volumeCtx.getVolume() < 33 &&
        !volumeCtx.getIsMuted() && (
          <div
            className={classes.mute}
            onMouseOver={(event) =>
              (event.currentTarget.firstChild.src = muteOffOneImgHover)
            }
            onMouseOut={(event) =>
              (event.currentTarget.firstChild.src = muteOffOneImg)
            }
            onClick={muteVideo}
          >
            <img src={muteOffOneImg} alt="" />
          </div>
        )}
      {volumeCtx.getVolume() >= 33 &&
        volumeCtx.getVolume() < 66 &&
        !volumeCtx.getIsMuted() && (
          <div
            className={classes.mute}
            onMouseOver={(event) =>
              (event.currentTarget.firstChild.src = muteOffTwoImgHover)
            }
            onMouseOut={(event) =>
              (event.currentTarget.firstChild.src = muteOffTwoImg)
            }
            onClick={muteVideo}
          >
            <img src={muteOffTwoImg} alt="" />
          </div>
        )}
      {volumeCtx.getVolume() >= 66 && !volumeCtx.getIsMuted() && (
        <div
          className={classes.mute}
          onMouseOver={(event) =>
            (event.currentTarget.firstChild.src = muteOffThreeImgHover)
          }
          onMouseOut={(event) =>
            (event.currentTarget.firstChild.src = muteOffThreeImg)
          }
          onClick={muteVideo}
        >
          <img src={muteOffThreeImg} alt="" />
        </div>
      )}

      <div className={classes.volSlider}>
        <input
          type="range"
          min="0"
          max="100"
          value={volumeCtx.getVolume()}
          onChange={updateVolume}
        />
      </div>
    </div>
  );
}

export default VolumeControl;
