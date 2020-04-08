type PokemonTypes =
  | "fire"
  | "water"
  | "grass"
  | "fairy"
  | "dragon"
  | "bug"
  | "ghost"
  | "steel"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "electric"
  | "psychic"
  | "ice"
  | "dark"
  | "normal";

export type Pokemon = {
  number: number;
  name: string;
  image: string;
  price: number;
  type: PokemonTypes[];
};
