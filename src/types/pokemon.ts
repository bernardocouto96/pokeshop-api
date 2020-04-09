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
  name: string;
  image: string;
  price: number;
  type: PokemonTypes[];
};
