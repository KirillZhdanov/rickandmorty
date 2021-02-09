import { ReactElement } from 'react'

interface Props {
    character:{
        id:number,
        name:string,
        image:string,
        status:string,
        gender:string,
        species:string,
        location:{
            name:string
        }
    },handleClick: (char: object) => void;
}

export default function CharacterCard({character,handleClick}: Props): ReactElement {
 const handl=()=>{
    handleClick(character)
 }
    return (
        <>
          <div className="character" onClick={handl}>
            <img className="avatar" src={character.image} alt={`${character.name} image`}/>
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Location: {character.location?.name}</p>
          </div>

        </>
    )
}
