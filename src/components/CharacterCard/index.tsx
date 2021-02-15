import { withRouter, RouteComponentProps } from "react-router-dom";
import { Card, RouteParams } from "../../models"
import { StyledSubTitle, StyledImage } from "../StyledComponents";
import "./styles.css"


const CharacterCard: React.FC<Card> = ({
  character,
  // history,
}) => {
  /*const characterClickHandler = () => {
    history.push(`/${character.id}`, {
      character,
    });
  };*/

  return (
    <>
      <StyledImage
        className="avatar"
        src={character.image}
        alt={`${character.name} image`}
      />
      <StyledSubTitle>{character.name}</StyledSubTitle>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      <p>Location: {character.location?.name}</p>
    </>
  );
};
export default CharacterCard;
