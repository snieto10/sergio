import TopTitle from "./layout/TopTitle";
import Body from "./layout/Body";
import ProjectMenu from "./layout/ProjectMenu";
import "./App.css";
import "./normalize.css";
import { BrowserRouter } from "react-router-dom";
import SizeRequired from "./layout/SizeRequired";

function App() {
  const data = [
    {
      title: "box1",
      items: [
        { name: "banana", price: 6 },
        { name: "avocado", price: 8 },
        { name: "tomato", price: 4 },
        { name: "juice", price: 7 },
      ],
    },
    { title: "box2", items: [] },
  ];
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
