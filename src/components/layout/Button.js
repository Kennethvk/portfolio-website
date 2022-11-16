import style from "./Button.module.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`${style.button} ${style[props.className]}`}>
      {props.children}
    </button>
  );
}

export default Button;
