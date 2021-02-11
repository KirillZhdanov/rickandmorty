import { withRouter, RouteComponentProps } from "react-router-dom";
import { Card } from "../interfaces"



type RouteParams = { id: string };
const CharacterCard: React.FC<Card & RouteComponentProps<RouteParams>> = ({
  character,
  history,
}) => {
  const characterClickHandler = () => {
    history.push(`/${character.id}`, {
      character,
    });
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
