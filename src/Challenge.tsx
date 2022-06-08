export interface ChallengeProps {
  name: string;
  select: (name: string) => void;
}

const Challenge: React.FunctionComponent<ChallengeProps> = ({
  name,
  select,
}) => {
  return <div onClick={() => select(name)}>{name}</div>;
};

export default Challenge;
