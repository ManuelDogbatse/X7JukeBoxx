import { useContext, useRef } from "react";

import classes from "./SearchBar.module.css";
import searchImg from "../../../imgs/search.png";
import SongContext from "../../../contexts/SongContext";
import PlayerContext from "../../../contexts/playerContexts/PlayerContext";
import QueueContext from "../../../contexts/QueueContext";

function SearchBar() {
  console.log("SearchBar Re-rendered");
  // const songCtx = useContext(SongContext);
  const queueCtx = useContext(QueueContext);
  const playerCtx = useContext(PlayerContext);

  const searchInputRef = useRef();

  function submitHandler(event) {
    playerCtx.updatePlayer({});
    event.preventDefault();
    const enteredSearchInput = searchInputRef.current.value;
    searchInputRef.current.value = "";
    // songCtx.updateSong(enteredSearchInput);
    queueCtx.searchSong(enteredSearchInput);
  }

  return (
    <form id="searchForm" className={classes.form} onSubmit={submitHandler}>
      <div className={classes.searchFieldWrapper}>
        <button id="searchBtn" className={classes.searchButton}>
          <img src={searchImg} alt="" />
        </button>
        <input
          id="searchInput"
          className={classes.searchBar}
          type="text"
          placeholder="Enter a song..."
          ref={searchInputRef}
          required
        />
      </div>
    </form>
  );
}

export default SearchBar;
