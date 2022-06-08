import { ChampionName, JARVAN_IV, LEBLANC } from "./data";

const toTitleCase = (str: string) => {
  return str[0].toUpperCase() + str.substring(1);
};

export const championToReadable = (name: ChampionName) => {
  return name
    .toLowerCase()
    .split(" ")
    .map(toTitleCase)
    .join(" ")
    .split("'")
    .map(toTitleCase)
    .join("'");
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
