import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import GameList from "./components/Games.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myGameList: [],
      topGames: [],
      topUpcomingGames: [],
    }
    //this.updateMyGames = this.updateMyGames.bind(this);
    this.fetch = this.fetch.bind(this);
    this.fetchTopGames = this.fetchTopGames.bind(this);
  }

  componentDidMount() {
    this.fetch();
    this.fetchTopGames();
  }

  // updateMyGames(gameData) {
  //   this.setState({
  //     myGameList: gameData
  //   }, () => {console.log('myGameList after updateMyGames()', this.state.myGameList)});
  // }

  //Get top 5 current games
  //ajax request -> server
  //type - get
  //url - /gitGood
  //success save the data to this.state.topGames
  fetchTopGames() {
    var that = this;
    $.ajax({
      type: 'GET',
      url: '/getGood',
      success: (topGames)=> {
        console.log(topGames);
        that.setState({
          topGames: topGames
        })
      },
      failure: () => {
        console.log('ajax request from client not receiving data');
      }
    }).done(console.log(that.state.topGames));
  }

  fetch() {
    var that = this;
    $.ajax({
      type: 'GET',
      url: '/game',
      // context: this,
      success: function (incomingGameData) {
        console.log('this is fetch/success', incomingGameData);
        that.setState({
          myGameList: incomingGameData
        })
        // that.updateMyGames(incomingGameData);
        // console.log(Array.isArray(incomingGameData))
        // console.log('this is this in fetch', this);
        // console.log('GAme Data fetched!');
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
        <TopGames topgames={this.state.topGames}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));