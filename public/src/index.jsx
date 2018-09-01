import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import GameList from "./components/Games.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGameList: ['asdf'],
      topGames: [],
      topUpcomingGames: [],
    }
    this.updateMyGames = this.updateMyGames.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  updateMyGames(gameData) {
    this.setState({
      myGameList: gameData
    })
  }

  fetch() {
    $.ajax({
      type: 'GET',
      url: '/getGames',
      context: this,
      success: function (incomingGameData) {
        console.log('incomingData upon success', incomingGameData);
        this.updateMyGames(incomingGameData);
        console.log(this.state.myGameList);
      },
      failure: function () {
        console.log('Game Data was not received');
      }
    })
  }

  componentDidMount() {
    this.fetch();
  }

  render () {
    return (
    <div>
        <h1>Command Center</h1>
        <h3>Welcome back Commander</h3>
        <GameList 
          games={this.state.myGameList}
        />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));