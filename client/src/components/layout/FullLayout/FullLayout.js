import { useContext, useEffect, useMemo, useState } from "react";

import classes from "./FullLayout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import YTAudioPlayer from "../../global/audioPlayers/YTAudioPlayer";
import SongContext from "../../../contexts/SongContext";
import PlayerContext from "../../../contexts/playerContexts/PlayerContext";
import QueueContext from "../../../contexts/QueueContext";

function FullLayout(props) {
  console.log("Full Layout Re-rendered");
  // const songCtx = useContext(SongContext);
  const playerCtx = useContext(PlayerContext);
  const queueCtx = useContext(QueueContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {}, [queueCtx.isLoading]);

  const isReady = useMemo(() => {
    return playerCtx.getIsPlayerReady();
  }, [playerCtx]);

  const isQueueReady = useMemo(() => {
    return queueCtx.queue.current.length > 0;
  }, [queueCtx]);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const main = useMemo(() => {
    return <Main>{props.children}</Main>;
  }, [props.children]);

  const footer = useMemo(() => {
    return <Footer />;
  }, []);

  return (
    <>
      <div id="fullLayout" className={classes.layout}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {main}
        {isQueueReady && footer}
      </div>
      {isQueueReady && <YTAudioPlayer />}
    </>
  );

  // return (
  //   <>
  //     {!isReady && (
  //       <div className={classes.loading}>
  //         <h2>Loading...</h2>
  //       </div>
  //     )}
  //     {isReady && (
  //       <div id="fullLayout" className={classes.layout}>
  //         <Navbar toggleSidebar={toggleSidebar} />
  //         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  //         {main}
  //         {footer}
  //       </div>
  //     )}
  //     {songCtx.videoID !== "" && <YTAudioPlayer />}
  //   </>
  // );
}

export default FullLayout;
