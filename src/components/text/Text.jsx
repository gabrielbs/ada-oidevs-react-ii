import "./text.css";

export const Text = (props) => {
  const classes = props.bold ? "bold" : "";
  return <div className={classes}>{props.children}</div>;
};
