import { ChampionName } from "./data";
import { championToImage } from "./helpers";
import "./Champion.css";

export interface ChampionProps {
  name: ChampionName;
}

const Champion: React.FunctionComponent<ChampionProps> = ({ name }) => {
  return (
    <div>
      <img
        src={`./champions/${championToImage(name)}Square.png`}
        alt={name}
        className="champion"
      />
    </div>
  );
};

export default Champion;
