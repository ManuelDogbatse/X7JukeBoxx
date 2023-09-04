import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import SearchContext from "../../store/search-context";
import classes from "./IndexPage.module.css";

function IndexPage() {
  const navigate = useNavigate();

  const searchCtx = useContext(SearchContext);

  function searchHandler(searchData) {
    // fetch("http://localhost:5000/search", {
    //   method: "POST",
    //   body: JSON.stringify(inputData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => {
    //   navigate("/play", { replace: false });
    // });

    searchCtx.updateSearch(searchData);

    navigate("/play", { replace: false });
  }

  return (
    <>
      <h2 className={classes.searchPrompt}>
        Enter a song, URL or artist name to begin the jukebox!
      </h2>
    </>
  );
}

export default IndexPage;
