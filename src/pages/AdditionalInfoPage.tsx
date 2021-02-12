import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchById } from "../redux/actions/actions";
import { Link } from 'react-router-dom';
import { StyledLink, StyledImage, StyledSubTitle, LoaderCenter } from "../components/StyledComponents";
import { ArrowBack } from "@styled-icons/boxicons-regular";
import { RootState } from '../redux/store';
import { Match, TSelectedById } from "../models";



const AdditionalInfoPage: React.FC<Match> = ({ match }) => {
    const character = useSelector((state: RootState | TSelectedById) => state.characterByIDReducer);
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
                <LoaderCenter className="lds-dual-ring" />
            </>)
    )
}

export default AdditionalInfoPage
