import { withRouter, RouteComponentProps } from "react-router-dom";

interface Card {
  character: {
    id?: number;
    name?: string;
    image?: string;
    status?: string;
    gender?: string;
    species?: string;
    location?: {
      name: string;
    };
  };
  handleClick: (char: object) => void;
}

type RouteParams = { id: string };
const CharacterCard: React.FC<Card & RouteComponentProps<RouteParams>> = ({
  character,
  handleClick,
  history,
}) => {
  const characterClickHandler = () => {
    history.push(`/${String(character.name).split(" ").join("_")}_${character.id}`, {
      character,
    });
    handleClick(character);
  };
  return (
    <>
      <div className="character" onClick={characterClickHandler}>
        <img
          className="avatar"
          src={character.image}
          alt={`${character.name} image`}
        />
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Species: {character.species}</p>
        <p>Location: {character.location?.name}</p>
      </div>
    </>
  );
};
export default withRouter(CharacterCard);
