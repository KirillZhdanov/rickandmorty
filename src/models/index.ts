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
    info: {};
    results: [{}];
  };
}
export interface CharacterByIdAction {
  type: string;
  payload: {
    id: number;
  };
}
export interface CharactersActionPayload {
  info: {};
  results: [{}];
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
export type RouteParams = { id: string };
export type TSelectedById = {
  characterByIDReducer: {
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
};
export type TSelected = {
  charactersInfoReducer: {
    characters: {
      info: {
        pages: number;
        next: string;
        prev: string;
      };
      results: [
        {
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
      ];
    };
  };
};

export interface charactersInfoState {
  characters: {
    info: {
      pages: number;
      next: string;
      prev: string;
    };
    results: charactersInfoStateResult[];
  };
}
export interface charactersInfoStateResult {
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
