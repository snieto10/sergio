import TopTitle from "./layout/TopTitle";
import Body from "./layout/Body";
import ProjectMenu from "./layout/ProjectMenu";
import "./App.css";
import "./normalize.css";
import { BrowserRouter } from "react-router-dom";
import SizeRequired from "./layout/SizeRequired";

function App() {
  return (
    <>
      <BrowserRouter>
        <SizeRequired />
        <TopTitle />
        <Body />
        <ProjectMenu />
      </BrowserRouter>
    </>
  );
}

export default App;
