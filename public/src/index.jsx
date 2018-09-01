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
  }

  componentDidMount() {
    this.fetch();
  }

  // updateMyGames(gameData) {
  //   this.setState({
  //     myGameList: gameData
  //   }, () => {console.log('myGameList after updateMyGames()', this.state.myGameList)});
  // }

  fetch() {
    var that = this;
    $.ajax({
      type: 'GET',
      url: '/getGames',
      // context: this,
      success: function (incomingGameData) {
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
    console.log('this is this in render', this);
    console.log('this is this.state.myGameList in render', this.state.myGameList);
    return (
    <div>
        <h1>Command Center</h1>
        <h3>Welcome back Commander</h3>
        <GameList games={this.state.myGameList}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));