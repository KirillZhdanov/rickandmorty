import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchById } from "../redux/actions/actions";
import { Link } from 'react-router-dom';
import { StyledLink, StyledImage, StyledSubTitle } from "../components/StyledComponents";
import { ArrowBack } from "@styled-icons/boxicons-regular";
import { RootState } from '../redux/store';
import { Match } from "../interfaces";


type TSelected = {
    characterByIDReducer: {
        id: number,
        name: string,
        image: string,
        status: string,
        gender: string,
        species: string,
        location: {
            name: string;
        },
    }
};
const AdditionalInfoPage: React.FC<Match> = ({ match }) => {
    const character = useSelector((state: RootState | TSelected) => state.characterByIDReducer);
    const dispatch = useDispatch();

    const visible = (character.name.length > 0);
    React.useEffect(() => {
        const characterId = Number.parseInt(match.url.substring(1));
        dispatch(fetchById(characterId));
    }, [])

    return (
        visible ? (
            <div>
                <StyledLink as={Link} to="/"><ArrowBack size={18} /> Back</StyledLink>
                <div>
                    <StyledImage className="avatar" src={character.image} alt={`${character.name} image`} />
                </div>
                <StyledSubTitle>{character.name}</StyledSubTitle>
                <div>
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Species: {character.species}</p>
                    <p>Location: {character.location?.name}</p>
                </div>
            </div>) : (<>
                <StyledLink as={Link} to="/"><ArrowBack size={18} /> Back</StyledLink>
                <div className="lds-dual-ring" style={{ position: "absolute", top: "50%", left: "50%" }}></div>
            </>)
    )
}

export default AdditionalInfoPage
