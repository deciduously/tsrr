import * as React from 'react';
import './App.css';
import GameWindow from '../containers/GameWindow';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React-Redux in Typescript</h1>
        </header>
        <GameWindow />
      </div>
    );
  }
}

export default App;
