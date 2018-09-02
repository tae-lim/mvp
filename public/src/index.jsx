import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import GameList from "./components/Games.jsx";
import TopGames from "./components/TopGames.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGameList: [],
      topGames: [],
    }
    this.fetch = this.fetch.bind(this);
    this.fetchTopGames = this.fetchTopGames.bind(this);
  }

  componentDidMount() {
    this.fetch();
    this.fetchTopGames();
  }

  fetchTopGames() {
    var that = this;
    $.ajax({
      type: 'GET',
      url: '/getGood',
      success: (topGames)=> {
        that.setState({
          topGames: JSON.parse(topGames)
        })
      },
      failure: () => {
        console.log('ajax request from client not receiving data');
      }
    })
  }

  fetch() {
    var that = this;
    $.ajax({
      type: 'GET',
      url: '/game',
      success: function (incomingGameData) {
        console.log('this is fetch/success', incomingGameData);
        that.setState({
          myGameList: incomingGameData
        })
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
          <GameList games={this.state.myGameList}/>
          <TopGames popGames={this.state.topGames}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

 // updateMyGames(gameData) {
  //   this.setState({
  //     myGameList: gameData
  //   }, () => {console.log('myGameList after updateMyGames()', this.state.myGameList)});
  // }