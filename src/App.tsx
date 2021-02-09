import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AdditionalInfoPage from './pages/AdditionalInfoPage';
import MainPage from './pages/MainPage';




function App() {
  const charactersApiInfo = useSelector<any, any>((state) => state.charactersInfoReducer.characters);
  const charactersInfo = charactersApiInfo.results;
  const fetchInfo = charactersApiInfo.info;

  console.log("info", charactersInfo, fetchInfo)
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
