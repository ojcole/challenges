import Champion from "./Champion";
import { GROUP_MAP } from "./data";
import "./ChampionGroup.css";

export interface ChampionGroupProps {
  group: string;
}

const ChampionGroup: React.FunctionComponent<ChampionGroupProps> = ({
  group,
}) => {
  const champions = GROUP_MAP.get(group);
  return (
    <div className="championGroup">
      {champions?.map((x) => (
        <Champion name={x} />
      ))}
    </div>
  );
};

export default ChampionGroup;
