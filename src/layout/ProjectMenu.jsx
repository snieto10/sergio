import React, { useState } from "react";

function ProjectMenu() {
  const [active, setActive] = useState(true);

  let handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={active ? "main-menu" : "main-menu expand"}>
        <h2>Project 1</h2>
        <h2>Project 2</h2>
        <h2>Project 3</h2>
        <h2>Project 4</h2>
        <h2>Project 5</h2>
      </div>

      <div className={active ? "menu" : "menu none"} onClick={handleClick}>
        <i className="fa-solid fa-grid fa-xl"></i>

        <div className="menu_project">PROJECTS</div>
      </div>
      <div className={active ? "menu none" : "menu"} onClick={handleClick}>
        <i className="fa-light fa-xmark fa-xl"></i>
        <div className="menu_project">PROJECTS</div>
      </div>
    </>
  );
}

export default ProjectMenu;
