import { useState } from "react";
import ChallengeGroup from "../challenge/ChallengeGroup";
import ChampionGroup from "../champion/ChampionGroup";
import { ALL_CHAMPS, ALL_GROUPS, ChampionName } from "../data";
import { getIntersection } from "../helpers";

const Challenges: React.FunctionComponent = () => {
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
    <>
      <ChallengeGroup selected={selected} updateSelected={updateSelected} />
      <ChampionGroup
        champions={champs}
        selected={Array(champs.length).fill(false)}
      />
    </>
  );
};

export default Challenges;
