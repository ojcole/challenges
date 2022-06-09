import { ChampionName, JARVAN_IV, LEBLANC } from "./data";

const toTitleCase = (str: string) => {
  return str[0].toUpperCase() + str.substring(1);
};

export const challengeToReadable = (name: string) => {
  return name.toLowerCase().split("_").map(toTitleCase).join(" ");
};

export const championToImage = (name: ChampionName) => {
  if (name === JARVAN_IV) return "Jarvan_IV";
  if (name === LEBLANC) return "LeBlanc";
  return name
    .toLowerCase()
    .split(" ")
    .map(toTitleCase)
    .join("_")
    .split("'")
    .map(toTitleCase)
    .join("'");
};

export const getIntersection = (set1: Iterable<any>, set2: Set<any>) => {
  return new Set([...set1].filter((elem) => set2.has(elem)));
};
