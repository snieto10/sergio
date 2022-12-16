import hero from "../assets/images/hero.svg";

function Body() {
  return (
    <>
      <div className="main">
        <div className="background1">
          <div className="background1_center">
            <div className="background1_absolute-right">
              <img className="background1_img" src={hero} alt="" />
            </div>
            <div className="background1_absolute-left">
              <img className="background1_img" src={hero} alt="" />
            </div>
            <div className="title">
              <div className="title_flex">
                <h1>Navigate projects to see Skills</h1>
                <h1>Navigation Bar</h1>
              </div>
            </div>
          </div>
          <div className="background2_center"></div>
        </div>
      </div>
    </>
  );
}

export default Body;
