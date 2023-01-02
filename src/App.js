import TopTitle from "./layout/TopTitle";
import Body from "./layout/Body";
import ProjectMenu from "./layout/ProjectMenu";
import "./App.css";
import "./normalize.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopTitle />
        <Body />
        <ProjectMenu />
      </BrowserRouter>
    </>
  );
}

export default App;
