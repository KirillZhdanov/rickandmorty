import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { MainPage, AdditionalInfoPage } from './pages';
import './App.css';


type TSelected = {
  charactersInfoReducer: {
    characters: {
      info: {},
      results: [{}]
    }
  }
};

function App() {
  const charactersApiInfo = useSelector((state: RootState | TSelected) => state.charactersInfoReducer.characters);
  const charactersInfo = charactersApiInfo.results;
  const fetchInfo = charactersApiInfo.info;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <MainPage charactersInfo={charactersInfo} fetchInfo={fetchInfo} />} />
        <Route path="/:character" component={AdditionalInfoPage} />
      </Switch>

    </div>
  );
}

export default App;
