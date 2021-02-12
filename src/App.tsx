import { Switch, Route } from 'react-router-dom';
import { MainPage, AdditionalInfoPage } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:character" component={AdditionalInfoPage} />
      </Switch>
    </div>
  );
}

export default App;
