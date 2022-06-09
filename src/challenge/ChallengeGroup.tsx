import { FIVE_GROUPS, THREE_GROUPS } from "../data";
import Challenge from "./Challenge";
import "./ChallengeGroup.css";

export interface ChallengeGroupProps {
  selected: boolean[];
  updateSelected?: (i: number) => void;
}

const ChallengeGroup: React.FunctionComponent<ChallengeGroupProps> = ({
  selected,
  updateSelected,
}) => {
  return (
    <>
      <h2>3+ Challenges</h2>
      <div className="challenges">
        {THREE_GROUPS.map((name, i) => (
          <Challenge
            name={name}
            select={updateSelected && (() => updateSelected(i))}
            selected={selected[i]}
            key={i}
          />
        ))}
      </div>
      <h2>5+ Challenges</h2>
      <div className="challenges">
        {FIVE_GROUPS.map((name, i) => {
          const newI = i + THREE_GROUPS.length;
          return (
            <Challenge
              name={name}
              select={updateSelected && (() => updateSelected(newI))}
              selected={selected[newI]}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default ChallengeGroup;
