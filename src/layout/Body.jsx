import hero from "../assets/images/hero.svg";
import PortfolioTracker from "./../components/PortfolioTracker/PortfolioTracker";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "../components/Slider/Slider";

function Body() {
  return (
    <>
      <div className="main">
        <div className="background1">
          <div className="background1_center">
            <div className="background1_absolute-right">
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
            </div>
            <div className="background1_absolute-left">
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
            </div>
            <div className="title">
              <div>
                <h1 className="flex">Scroll Down to see Projects</h1>
                <h1>or use the Projects Menu</h1>
              </div>
              <div className="buttons">
                <Link to="#project1" smooth>
                  <button className="btn_title">The Favorite One</button>
                </Link>
                <Link to="#project3" smooth>
                  <button className="btn_title">The Complex One</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="background2_center">
            <div className="projects" id="project1">
              <div className="projects_title"> 1- PORTFOLIO TRACKER</div>
              <div className="text">
                ADD STOCKS AND TRACK YOUR PORTFOLIO <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Used useState to create dynamic table, pulled the current
                  price from API (using Fetch, .then()), sort the table in every
                  column. Validation was added.
                </span>
              </div>
              <br></br>
              <PortfolioTracker />
            </div>
            <div className="projects" id="project2">
              {" "}
              <div className="projects_title"> 2- SLIDERS</div>
              <Slider />
            </div>
            <div className="projects" id="project3">
              {" "}
              <div className="projects_title"> 3- GIT HUB FINDERS</div>
            </div>
            <div className="projects" id="project3">
              {" "}
              <div className="projects_title"> 4- SHOPPING CART</div>
            </div>
            <div className="projects" id="project3">
              {" "}
              <div className="projects_title"> 5 - AUTOCOMPLETE</div>
            </div>
            <div className="projects" id="project3">
              {" "}
              <div className="projects_title"> OTHER PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
