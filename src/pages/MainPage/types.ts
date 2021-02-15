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
