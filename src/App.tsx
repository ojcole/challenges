import "./App.css";
import { ALL_GROUPS } from "./data/data";
import ChampionGroup from "./data/ChampionGroup";
import Challenge from "./Challenge";
import { useState } from "react";

function App() {
  const [activeGroup, setActiveGroup] = useState<string | undefined>(undefined);

  return (
    <div className="App">
      {ALL_GROUPS.map(([name, _]) => (
        <Challenge name={name} select={setActiveGroup} />
      ))}
      {activeGroup && <ChampionGroup group={activeGroup} />}
    </div>
  );
}

export default App;
