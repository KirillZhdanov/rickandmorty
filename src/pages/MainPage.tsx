import React, { ReactElement } from 'react';
import CharacterCard from "../components/CharacterCard";
import { useDispatch } from 'react-redux';
import { fetchCharacters } from "../redux/actions/actions";

interface Props {
  charactersInfo: any,
  fetchInfo: any
}

function MainPage({ charactersInfo, fetchInfo }: Props): ReactElement {
  const nextPage = fetchInfo?.next?.match(/\d+/g) || 1;
  const dispatch = useDispatch();
  const [noData, setNoData] = React.useState(false);
  const onScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight * 0.8) {
      setNoData(!noData)
    }
  }
  React.useEffect(() => {
    document.addEventListener("scroll", onScroll)
    dispatch(fetchCharacters(nextPage))
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [noData])

  const handleClick = React.useCallback((char) => {
    console.log(char)
  }, []);

  return (
    <div className="charactersList"  >
      {
        charactersInfo.map((character: any, idx: number) => (
          Object.keys(character).length ? <CharacterCard handleClick={handleClick} key={`${character.name}_${character.id}_${idx}`} character={character} /> : null
        ))

      }
    </div>
  )
}

export default MainPage
