import { useContext, useEffect, useState } from "react";

import classes from "./SongInfo.module.css";
import QueueContext from "../../../contexts/QueueContext";

function SongInfo(props) {
  const queueCtx = useContext(QueueContext);

  const [song, setSong] = useState({});

  useEffect(() => {
    setSong(queueCtx.queue.current[queueCtx.currentSong]);
  }, [queueCtx.currentSong]);

  return (
    <div className={classes.container} id={props.pos}>
      <div className={classes.songArt}>
        <img src={song.imageURL} alt="" />
      </div>
      <div className={classes.songDetails}>
        <div>
          <p className={classes.songTitle}>{song.title}</p>
        </div>
        <div>
          <p className={classes.songArtist}>{song.artist}</p>
        </div>
      </div>
    </div>
  );
}

export default SongInfo;
