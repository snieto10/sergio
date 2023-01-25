import hero from "../assets/images/hero.svg";
import PortfolioTracker from "./../components/PortfolioTracker/PortfolioTracker";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider/Slider2";
import TicTacToe from "../components/TicTacToe/TicTacToe";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { FaGithubSquare } from "react-icons/fa";
import githubback from "../assets/images/GitHubPicture.jpg";
import github from "../assets/images/github.svg";

function Body() {
  return (
    <>
      <div className="main">
        <div className="background1">
          <div className="background1_center">
            <div className="background1_absolute-right">
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
            </div>
            <div className="background1_absolute-left">
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
              <img className="background1_img" src={hero} alt="" />
            </div>
            <div className="title">
              <div>
                <h1 className="flex">Scroll Down to see Projects</h1>
                <h1>or use the Projects Menu</h1>
              </div>
              <div className="buttons">
                <Link to="#project2" smooth>
                  <button className="btn_title">The Favorite One</button>
                </Link>
                <Link to="#project4" smooth>
                  <button className="btn_title">The Complex One</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="background2_center">
            <div className="projects" id="project1">
              <div className="projects_title">
                {" "}
                1- PORTFOLIO TRACKER
                <div className="unique-github">
                  <FaGithubSquare color="darkblue" width="20px" />
                </div>
              </div>
              <div className="text">
                ADD STOCKS AND TRACK YOUR PORTFOLIO <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Used useState to create dynamic table, consumed a restful API
                  to get stocks data, also sorting and validation were added.
                </span>
              </div>
              <br></br>
              <PortfolioTracker />
            </div>
            <div className="projects" id="project2">
              {" "}
              <div className="projects_title">
                {" "}
                2- SLIDERS{" "}
                <div className="unique-github">
                  <FaGithubSquare color="darkblue" width="20px" />
                </div>
              </div>
              <div className="text">
                SLIDER 1 - Click to change image <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Sliders are becoming more important to show more data within
                  the same page. Created a slider using the CSS opacity
                  property.
                </span>
              </div>
              <Slider />
              <div className="text">
                SLIDER 2 - Drag to slide images <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Copied Amazon.com Slider to show products for Tablet or Mobile
                  using React's framer-motion library.
                </span>
              </div>
              <Slider2 />
            </div>
            <div className="projects" id="project3">
              {" "}
              <div className="projects_title">
                {" "}
                3- TIC-TAC-TOE
                <div className="unique-github">
                  <FaGithubSquare color="darkblue" width="20px" />
                </div>
              </div>
              <div className="text">
                PLAY TIC-TAC-TOE AGAINST THE PC <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Created a Tic-Tac-Toe using Javascript. If you win, computer
                  will have a extra turn to tie !
                </span>
              </div>
              <br></br>
              <TicTacToe />
            </div>
            <div className="projects" id="project4">
              {" "}
              <div className="projects_title">
                {" "}
                4- SHOPPING CART{" "}
                <div className="unique-github">
                  <FaGithubSquare color="darkblue" width="20px" />
                </div>
              </div>
              <div className="text">
                DRAG AND DROP MENU <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Using useState, useEffect, useRef created a drag and drop
                  menu. Only works on desktops.
                </span>
              </div>
              <ShoppingCart />
            </div>
            <div className="projects" id="project5">
              {" "}
              <div className="projects_title"> OTHER PROJECTS</div>
              <div className="other-box">
                <div className="other-box-project1">
                  <div className="other-box-image1">
                    <img className="other-image" src={githubback} alt="" />
                  </div>
                  <div className="other-text">
                    <h3>GITHUB FINDER</h3>
                    <h3 style={{ lineHeight: "15px" }}>
                      Used useContext to avoid prop-drilling and used axios to
                      request the data
                    </h3>
                    <p className="other-view">view code</p>
                  </div>
                </div>

                <div className="other-box-project1">
                  <div className="other-box-image2">
                    <h3 className="feedbackui-text">Feedback UI</h3>
                  </div>
                  <div className="other-text">
                    <h3>FEEDBACK UI</h3>
                    <h3 style={{ lineHeight: "15px" }}>
                      Used useState and useEffect to add, delete and edit your
                      feedback !
                    </h3>
                    <p className="other-view">view code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
