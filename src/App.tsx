import "./App.css";
import { ALL_CHAMPS } from "./data/data";
import { useState } from "react";
import { championToImage } from "./data/helpers";
import Champions from "./Champions";
import Challenges from "./Challenges";
import CompCreator from "./CompCreator";

// Preload images
ALL_CHAMPS.forEach((champ) => {
  new Image().src = `./champions/${championToImage(champ)}Square.png`;
});

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabNames = ["Challenges", "Champions", "Comp Creator"];
  const tabs = [<Challenges />, <Champions />, <CompCreator />];

  return (
    <div className="app">
      <div className="tabs">
        {tabNames.map((name, i) => (
          <div
            className={"tab" + (currentTab === i ? " selected" : "")}
            key={i}
            onClick={() => setCurrentTab(i)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="body">{tabs[currentTab]}</div>
    </div>
  );
}

export default App;
