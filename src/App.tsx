import "./App.css";
import { ALL_CHAMPS, ALL_GROUPS, ChampionName } from "./data/data";
import ChampionGroup from "./data/ChampionGroup";
import Challenge from "./challenge/Challenge";
import { useState } from "react";
import { championToImage } from "./data/helpers";

// Preload images
ALL_CHAMPS.forEach((champ) => {
  new Image().src = `./champions/${championToImage(champ)}Square.png`;
});

const getIntersection = (set1: Iterable<any>, set2: Set<any>) => {
  return new Set([...set1].filter((elem) => set2.has(elem)));
};

function App() {
  const [selected, setSelected] = useState<boolean[]>(
    Array(ALL_GROUPS.length).fill(false)
  );

  const updateSelected = (i: number) => {
    const copy = [...selected];
    copy[i] = copy[i] !== true;
    setSelected(copy);
  };

  const allChamps = new Set<ChampionName>(ALL_CHAMPS);
  const champs = [
    ...ALL_GROUPS.reduce(
      (accum, [_, champs], i) =>
        selected[i] ? getIntersection(champs, accum) : accum,
      allChamps
    ),
  ];
  champs.sort();

  return (
    <div className="app">
      <div className="challenges">
        {ALL_GROUPS.map(([name, _], i) => (
          <Challenge
            name={name}
            select={() => updateSelected(i)}
            selected={selected[i]}
          />
        ))}
      </div>
      <ChampionGroup champions={champs} />
    </div>
  );
}

export default App;
