export interface Card {
  character: {
    id: number;
    name: string;
    image: string;
    status: string;
    gender: string;
    species: string;
    location: {
      name: string;
    };
  };
}

export interface CharactersAction {
  type: string;
  payload: {
    info: CharacterInfo;
    results: Character[];
  };
}
export interface CharacterByIdAction {
  type: string;
  payload: {
    id: number;
  };
}
export interface CharactersActionPayload {
  info: CharacterInfo;
  results: Character[];
}
export interface CharacterByIdActionPayload {
  id: number;
}
export interface Page {
  type: string;
  page: number;
}
export interface Id {
  type: string;
  id: number;
}
export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  location: {
    name: string;
  };
}
export interface CharacterInfo {
  pages: number;
  next?: string;
  prev?: string;
}
export type RouteParams = { id: string };

export interface CharactersInfoState {
  info: CharacterInfo;
  results: Character[];
}
