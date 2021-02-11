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
export interface Match {
  match: {
    url: string;
  };
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
export interface MainPageProps {
  charactersInfo: [
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
  fetchInfo: {
    pages: number;
    next: string;
    prev: string;
  };
}
