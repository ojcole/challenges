import Champion from "./Champion";
import { ChampionName } from "./data";
import "./ChampionGroup.css";

export interface ChampionGroupProps {
  champions: ChampionName[] | undefined;
  selected: boolean[];
  updateSelected?: (i: number) => void;
}

const ChampionGroup: React.FunctionComponent<ChampionGroupProps> = ({
  champions,
  selected,
  updateSelected,
}) => {
  return (
    <div className="championGroup">
      {champions?.map((x, i) => (
        <Champion
          name={x}
          selected={selected[i]}
          select={updateSelected && (() => updateSelected(i))}
          key={i}
        />
      ))}
    </div>
  );
};

export default ChampionGroup;
