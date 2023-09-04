import { useContext, useEffect, useMemo } from "react";

import classes from "./PlayPage.module.css";
import AddToButton from "../../components/global/audioControls/addTo/AddToButton";
import AudioButtons from "../../components/global/audioControls/buttons/AudioButtons";
import ProgressControl from "../../components/global/audioControls/progress/ProgressControl";
import VolumeControl from "../../components/global/audioControls/volume/VolumeControl";
import SongInfo from "../../components/global/songInfo/SongInfo";
import QueueContext from "../../contexts/QueueContext";

function PlayPage() {
  const queueCtx = useContext(QueueContext);

  useEffect(() => {}, [queueCtx.isLoading]);

  const isQueueReady = useMemo(() => {
    return queueCtx.queue.current.length > 0;
  }, [queueCtx]);

  return (
    <div className={classes.container}>
      {isQueueReady && (
        <>
          <div className={classes.mnTop}>
            <SongInfo pos="main" />
          </div>
          <div className={classes.mnMid}>
            <ProgressControl pos="main" />
          </div>
          <div className={classes.mnBot}>
            <div className={classes.mnBotLeft}>
              <div>
                <VolumeControl pos="main" />
              </div>
            </div>
            <div className={classes.mnBotMid}>
              <AudioButtons pos="main" />
            </div>
            <div className={classes.mnBotRight}>
              <div>
                <AddToButton pos="main" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PlayPage;
