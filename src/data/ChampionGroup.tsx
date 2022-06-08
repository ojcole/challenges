import Champion from "./Champion";
import { ChampionName } from "./data";
import "./ChampionGroup.css";

export interface ChampionGroupProps {
  champions: ChampionName[] | undefined;
}

const ChampionGroup: React.FunctionComponent<ChampionGroupProps> = ({
  champions,
}) => {
  return (
    <div className="championGroup">
      {champions?.map((x) => (
        <Champion name={x} />
      ))}
    </div>
  );
};

export default ChampionGroup;
