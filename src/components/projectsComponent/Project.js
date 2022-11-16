import Button from "../layout/Button";
import styleGrid from "./ProjectGrid.module.css";
import styleList from "./ProjectList.module.css";

function Project(props) {
  let style;
  if (props.view === "grid") {
    style = styleGrid;
  } else {
    style = styleList;
  }

  return (
    <div className={style.view}>
      <div className={style.image}>
        <img src={props.project.image} alt="Web Calculator" />
      </div>
      <div className={style.info}>
        <div>
          <div className={style.title}>
            <span>{props.project.title}</span>
            <span>
              {props.project.date.toLocaleDateString(undefined, {
                year: "numeric",
                day: "numeric",
                month: "short",
              })}
            </span>
          </div>
          <div className={style.desc}>
            {props.view === "grid"
              ? props.project.descShort
              : props.project.descLong}
          </div>
        </div>
        <Button>
          <a href={props.project.url}>Open in Github</a>
        </Button>
      </div>
    </div>
  );
}

export default Project;
