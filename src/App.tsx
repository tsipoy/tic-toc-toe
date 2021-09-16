import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import StartPlayers from './components/StartPlayers';
import { 
  Switch,
  Route,
} from "react-router-dom";
import { Paths } from "./helpers/routerHelper";
import GameStart from './components/GameStart';
import Restart from './components/Restart';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path={Paths.START_SCREEN}>
            <StartScreen 
              type= '' 
              placeholder= ''
              label= ''
              onChange= {() => null}
            /> 
          </Route>
          <Route path={Paths.START_PLAYERS}>
            <StartPlayers />
          </Route>
          <Route path={Paths.GAME_START}>
            <GameStart />
          </Route>
          <Route path={Paths.RESTART}>
            <Restart />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
