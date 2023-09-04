import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import SearchBar from "../../global/search/SearchBar";

function Navbar(props) {
  console.log("Navbar Re-rendered");
  return (
    <header id="navbar" className={classes.navbar}>
      <div className={classes.nvLeft}>
        <div className={classes.sideBtnWrap}>
          <div
            id="sideBtn"
            className={classes.sideBtn}
            onClick={props.toggleSidebar}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={classes.titleWrap}>
          <Link to={"/"} className={classes.title}>
            <h2>X7JUKEBOXX</h2>
          </Link>
        </div>
      </div>
      <div className={classes.nvMid}>
        <div className={classes.searchBarWrap}>
          <SearchBar />
        </div>
      </div>
      <div className={classes.nvRight}>
        <nav className={classes.navWrap}>
          <ul>
            <li>
              <Link to={"/login"} className={classes.link}>
                <p>Log In</p>
              </Link>
            </li>
            <li>
              <Link to={"/signup"} className={classes.link}>
                <p>Sign Up</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
