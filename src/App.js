import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
//import ParentComp from "./components/ParentComp";
function App() {
  return (
    <div className="App">
      {/* <ParentComp /> */}
      <ClickCounter name="Ankur" />
      <HoverCounter name="Ankur" />
    </div>
  );
}

export default App;
