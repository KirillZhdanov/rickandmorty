import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { StyledLink, StyledImage, StyledSubTitle } from "../components/StyledComponents";
import { ArrowBack } from "@styled-icons/boxicons-regular";


const AdditionalInfoPage: React.FC = ({ }) => {


    const Location = useLocation();
    const char = JSON.parse(JSON.stringify(Location.state))
    return (
        <div>
            <StyledLink as={Link} to="/"><ArrowBack size={18} /> Back</StyledLink>
            <div>
                <StyledImage className="avatar" src={char.character.image} alt={`${char.character.name} image`} />
            </div>
            <StyledSubTitle>{char.character.name}</StyledSubTitle>
            <div>
                <p>Status: {char.character.status}</p>
                <p>Gender: {char.character.gender}</p>
                <p>Species: {char.character.species}</p>
                <p>Location: {char.character.location?.name}</p>
            </div>
        </div>
    )
}

export default AdditionalInfoPage
