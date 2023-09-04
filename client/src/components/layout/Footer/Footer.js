import { useContext, useEffect, useMemo } from "react";

import classes from "./Footer.module.css";

import SongInfo from "../../global/songInfo/SongInfo";
import AddToButton from "../../global/audioControls/addTo/AddToButton";
import VolumeControl from "../../global/audioControls/volume/VolumeControl";
import AudioButtons from "../../global/audioControls/buttons/AudioButtons";
import ProgressControl from "../../global/audioControls/progress/ProgressControl";
import QueueContext from "../../../contexts/QueueContext";

function Footer() {
  console.log("Footer re-rendered");

  const queueCtx = useContext(QueueContext);

  useEffect(() => {}, [queueCtx.isLoading]);

  const isQueueReady = useMemo(() => {
    return queueCtx.queue.current.length > 0;
  }, [queueCtx]);

  return (
    <footer className={classes.footer}>
      {isQueueReady && (
        <>
          <div className={classes.ftLeft}>
            <div className={classes.ftSongInfo}>
              <SongInfo pos="footer" />
            </div>
            <div className={classes.ftAddTo}>
              <AddToButton pos="footer" />
            </div>
            <div className={classes.ftVol}>
              <VolumeControl pos="footer" />
            </div>
          </div>
          <div className={classes.ftMiddle}>
            <AudioButtons pos="footer" />
          </div>
          <div className={classes.ftRight}>
            <ProgressControl pos="footer" />
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
