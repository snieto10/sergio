import MenuBar from "../assets/components/MenuBar";
import hero from "../assets/images/hero.svg";

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
              <h1 className="flex">Scroll Down to see Projects</h1>
              <h1>or use the Project Menu</h1>
            </div>
          </div>
          <div className="background2_center"></div>
        </div>
      </div>
    </>
  );
}

export default Body;
