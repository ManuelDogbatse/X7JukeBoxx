import classes from "./Sidebar.module.css";

function Sidebar(props) {
  console.log("Sidebar Re-rendered");

  return (
    <div className={classes.sidebar} isopen={`${props.isOpen}`}>
      <div className={classes.content}>
        <nav className={classes.navWrap}>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Library</p>
            </li>
            <li>
              <p>History</p>
            </li>
            <li>
              <p>Playlists</p>
            </li>
          </ul>
        </nav>
        <div className={classes.playlistsWrap}>
          <div className={classes.playlists}>
            <div id="addNewPlaylist">
              <div id="addToBtn"></div>
              <div>
                <p>Add New Playlist</p>
              </div>
            </div>
            <div id="list"></div>
          </div>
        </div>
      </div>
      <div className={classes.backdrop} onClick={props.toggleSidebar}></div>
    </div>
  );
}

export default Sidebar;
