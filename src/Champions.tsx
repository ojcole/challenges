import { useState } from "react";
import ChallengeGroup from "./challenge/ChallengeGroup";
import ChampionGroup from "./data/ChampionGroup";
import {
  ALL_CHAMPS,
  ALL_GROUP_NAMES,
  CHAMPION_CHALLENGE_MAP,
} from "./data/data";
import { getIntersection } from "./data/helpers";

const Champions: React.FunctionComponent = () => {
  const [selected, setSelected] = useState(
    Array(ALL_CHAMPS.length).fill(false)
  );

  const updateSelected = (i: number) => {
    const copy = [...selected];
    copy[i] = copy[i] !== true;
    setSelected(copy);
  };

  const champs = ALL_CHAMPS.filter((_, i) => selected[i]);
  const challenges =
    champs.length > 0
      ? champs
          .map((champ) => CHAMPION_CHALLENGE_MAP.get(champ))
          .reduce((accum, curr) => {
            if (curr === undefined) return accum;
            return getIntersection(curr, accum);
          }, new Set(ALL_GROUP_NAMES))
      : new Set();

  const selectedGroups = ALL_GROUP_NAMES.map((group) => challenges.has(group));

  return (
    <>
      <ChallengeGroup selected={selectedGroups} />
      <ChampionGroup
        champions={ALL_CHAMPS}
        selected={selected}
        updateSelected={updateSelected}
      />
    </>
  );
};

export default Champions;
