import github from "../assets/images/github.svg";
import linkedIn from "../assets/images/linkedin.svg";
import logo from "../assets/images/logo.svg";

function TopTitle() {
  return (
    <>
      <div className="flex flex-spaceBetween max-width">
        <div className="flex flex-logo">
          <img src={logo} alt="sergioLogo" />
        </div>
        <div className="flex programming-lenguages opacity7 letter-space">
          <h3>JAVASCRIPT</h3>
          <h3>REACT</h3>
          <h3>HTML</h3>
          <h3>CSS </h3>
          <h3>GITHUB </h3>
        </div>
        <div className="flex">
          <div className="flex flex-icon">
            <img src={linkedIn} alt="linkedinlogo" />
          </div>
          <div className="flex flex-icon">
            <img src={github} alt="githublogo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopTitle;
