import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import GameList from "./components/Games.jsx";
import TopGames from "./components/TopGames.jsx";
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGameList: [],
      topGames: [],
    }
    this.updateMyGames = this.updateMyGames.bind(this);
    this.updateTopGames = this.updateTopGames.bind(this);
  }

  componentDidMount() {
    this.fetchMyGames();
    this.fetchTopGames();
  }

  fetchMyGames() {
    this.fetch(this.updateMyGames, '/game');
  }

  fetchTopGames() {
    this.fetch(this.updateTopGames, '/getGood');
  }

  updateMyGames(gameData) {
    this.setState({
      myGameList: gameData
    });
  }

  updateTopGames(topGames) {
    this.setState({
      topGames: JSON.parse(topGames)
    });
  }

  fetch(callback, url) {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        callback(data);
      },
      failure: () => {
        console.log(`${callback} not invoked`);
      }
    })
  }

  render () {
    return (
      <div>
          <h1>Command Center</h1>
          <h3>Welcome back Commander</h3>
          <GameList games={this.state.myGameList}/>
          <TopGames popGames={this.state.topGames}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));