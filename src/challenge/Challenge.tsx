import { challengeToReadable } from "../helpers";
import "./Challenge.css";

export interface ChallengeProps {
  name: string;
  select?: () => void;
  selected: boolean;
}

const Challenge: React.FunctionComponent<ChallengeProps> = ({
  name,
  select,
  selected,
}) => {
  return (
    <div
      onClick={select}
      className={
        "challenge-container" +
        (select !== undefined ? " selectable" : "") +
        (selected ? " selected" : "")
      }
    >
      <img src={`./challenges/${name}.png`} alt={name} />
      <p className="name">{challengeToReadable(name)}</p>
      <p className="desc"></p>
    </div>
  );
};

export default Challenge;
