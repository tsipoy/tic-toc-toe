import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameStart';
import { 
  Switch,
  Route,
} from "react-router-dom";
import { Paths } from "./helpers/routerHelper";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path={Paths.GAME_SCREEN}>
              <GameScreen />
          </Route>
          <Route path={Paths.START_SCREEN}>
            <StartScreen 
              type= '' 
              placeholder= ''
              label= ''
              onChange= {() => null}
            /> 
          </Route>
      </Switch>
    </div>
  );
}

export default App;
