import classes from "./Main.module.css";

function Main(props) {
  console.log("Main re-rendered");

  return <main className={classes.main}>{props.children}</main>;
}

export default Main;
