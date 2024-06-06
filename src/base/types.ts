// Character schema https://rickandmortyapi.com/documentation/#character-schema
export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    link: URL;
  };
  location: {
    name: string;
    link: URL;
  };
  image: string;
  episode: URL[];
  url: URL;
  created: string;
}

type URL = string;
