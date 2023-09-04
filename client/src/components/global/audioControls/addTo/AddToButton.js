import classes from "./AddToButton.module.css";

import plusImg from "./../../../../imgs/plus.png";
import plusImgHover from "./../../../../imgs/plus-hover.png";

function AddToButton(props) {
  return (
    <div className={classes.container} id={props.pos}>
      <div
        onMouseOver={(event) =>
          (event.currentTarget.firstChild.src = plusImgHover)
        }
        onMouseOut={(event) => (event.currentTarget.firstChild.src = plusImg)}
      >
        <img src={plusImg} alt="" />
      </div>
    </div>
  );
}

export default AddToButton;
