import hero from "../assets/images/hero.svg";
import PortfolioTracker from "./../components/PortfolioTracker/PortfolioTracker";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "../components/Slider/Slider";
import Slider2 from "../components/Slider/Slider2";
import TicTacToe from "../components/TicTacToe/TicTacToe";
import { useRef } from "react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

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
              <div className="projects_title"> 1- PORTFOLIO TRACKER</div>
              <div className="text">
                ADD STOCKS AND TRACK YOUR PORTFOLIO <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Used useState to create dynamic table, pulled the current
                  price from API (using Fetch, .then()), sort the table by
                  Sticker or Price. Validation was added.
                </span>
              </div>
              <br></br>
              <PortfolioTracker />
            </div>
            <div className="projects" id="project2">
              {" "}
              <div className="projects_title"> 2- SLIDERS</div>
              <div className="text">
                SLIDER 1 - Click to change image <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Created basic Slider showing different pictures. This Slider
                  was created using React and CSS.
                </span>
              </div>
              <Slider />
              <div className="text">
                SLIDER 2 - Grab to slide images <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Copied Amazon.com Slider to show products for Tablet or
                  Mobile. Used the React's framer-motion library, and useState,
                  useEffect and useRef hooks.
                </span>
              </div>
              <Slider2 />
            </div>
            <div className="projects" id="project3">
              {" "}
              <div className="projects_title"> 3- TIC-TAC-TOE</div>
              <div className="text">
                PLAY TIC-TAC-TOE AGAINST THE PC <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Created a TicTacToe using Javascript and React. If you win,
                  computer will have a extra turn to tie !
                </span>
              </div>
              <br></br>
              <TicTacToe />
            </div>
            <div className="projects" id="project4">
              {" "}
              <div className="projects_title"> 4- SHOPPING CART</div>
              <div className="text">
                PLAY TIC-TAC-TOE AGAINST THE PC <br />
                <span style={{ fontSize: "1.4rem" }}>
                  Created a TicTacToe using Javascript and React. If you win,
                  computer will have a extra turn to tie !
                </span>
              </div>
              <ShoppingCart />
            </div>
            <div className="projects" id="project5">
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
