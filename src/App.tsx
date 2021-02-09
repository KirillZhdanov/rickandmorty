import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { fetchCharacters } from "./redux/actions/actions";
import CharacterCard from "./components/CharacterCard";


function App() {
  const charactersApiInfo=useSelector<any,any>((state)=>state.charactersInfoReducer.characters);
  const charactersInfo=charactersApiInfo.results;
  const fetchInfo=charactersApiInfo.info;
  const nextPage=fetchInfo?.next?.match(/\d+/g)||1;
  const dispatch = useDispatch();
 // const rndPage=Math.floor(Math.random() * Math.floor(30));
  const [noData, setNoData] = React.useState(false);
  React.useEffect(() => {
  dispatch(fetchCharacters(nextPage))
  }, [noData])
  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight*0.8) {
      setNoData(!noData)
      console.log("SCROLL")
    }
  }
  const handleClick=React.useCallback((char)=>{
    console.log(char)
  },[]);
 console.log("info",charactersInfo,fetchInfo)
  return (
    <div className="App">
      <div className="charactersList"  >
      {
        charactersInfo.map((character:any,idx:number) => (
          Object.keys(character).length?<CharacterCard handleClick={handleClick} key={`${character.name}_${character.id}_${idx}`} character={character} />:null
          ))
      
      }
      </div>
    </div>
  );
}

export default App;
