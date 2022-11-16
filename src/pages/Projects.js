import React, { useState } from "react";

import style from "./Projects.module.css";
import Project from "../components/projectsComponent/Project";
import Button from "../components/layout/Button";

function Projects(props) {
  const [view, setView] = useState("list");
  const [sort, setSort] = useState("oldest");
  let projects = props.projectsList;

  function changeViewHandler() {
    if (view === "grid") {
      setView("list");
    } else if (view === "list") {
      setView("grid");
    }
  }

  function changeSortHandler() {
    if (sort === "oldest") {
      setSort("newest");
      projects = projects.sort((a, b) => b.date - a.date);
    } else if (sort === "newest") {
      setSort("oldest");
      projects = projects.sort((a, b) => a.date - b.date);
    }
  }

  return (
    <section className={style.projects}>
      <div className={style.title}>
        <h1>My Projects</h1>
        <div>
          <Button className="alt" onClick={changeViewHandler}>
            View: {view === "list" ? "Wide" : "Short"}
          </Button>
          <Button className="alt" onClick={changeSortHandler}>
            Sort: {sort === "oldest" ? "Oldest" : "Newest"}
          </Button>
        </div>
      </div>
      <div className={style.projectContainer}>
        {projects.map((project) => {
          return <Project key={project.key} project={project} view={view} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
