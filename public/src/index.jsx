import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import GameList from "./components/Games.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGames: [],
      topGames: [],
      topUpcomingGames: [],
    }
    this.updateMyGames = this.updateMyGames.bind(this);
  }

  updateMyGames(games) {
    this.setState({
      myGames: games
    })
  }

  fetch() {
    $.ajax({
      type: 'GET',
      url: '/',
      success: function (incomingGameData) {
        this.updateMyGames(incomingGameData);
      },
      failure: function () {
        console.log('Game Data was not received');
      }
    })
  }

  render () {
    return (
    <div>
        <h1>Command Center</h1>
        <h3>Welcome back Commander</h3>
        <GameList 
          games={this.state.myGames}
        />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//  updateState(games) {
//   this.setState({
//     games: games
//   })
// }

// componentDidMount() {

// }

// handleSearch(game) {

// }

// fetch() {
//   $.ajax({
//     type: 'GET',
//     url: '/',
//     data: {}
//   })
// }

// post() {
  
// }