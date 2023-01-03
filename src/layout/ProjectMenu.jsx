import React, { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

function ProjectMenu() {
  const [active, setActive] = useState(true);

  let handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={active ? "main-menu" : "main-menu expand"}>
        <Link to="#project1" smooth>
          <h2>Project 1</h2>
        </Link>
        <Link to="#project2" smooth>
          <h2>Project 2</h2>
        </Link>
        <Link to="#project3" smooth>
          <h2>Project 3</h2>
        </Link>
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
