import { ChampionName } from "./data";
import { championToImage } from "./helpers";
import "./Champion.css";

export interface ChampionProps {
  name: ChampionName;
  selected: boolean;
  select?: () => void;
}

const Champion: React.FunctionComponent<ChampionProps> = ({
  name,
  select,
  selected,
}) => {
  return (
    <div
      className={
        "championContainer" +
        (select !== undefined ? " selectable" : "") +
        (selected ? " selected" : "")
      }
      onClick={select}
    >
      <img
        src={`./champions/${championToImage(name)}Square.png`}
        alt={name}
        className="champion"
      />
    </div>
  );
};

export default Champion;
