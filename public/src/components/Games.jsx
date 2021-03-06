import React from 'react';
import $ from "jquery";
import { Table } from 'react-bootstrap';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      system: 'PC',
      rating: '1/5',
      progress: 'New Game',
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSystem = this.handleSystem.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.post = this.post.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  post(postData) {
    $.ajax({
      type:'POST',
      url: '/',
      data: postData
    })
    .done(console.log('sweet deal'));
  }

  handleSubmit() {
    if (this.state.title) {
      var gameInfo = {
        title: this.state.title,
        system: this.state.system,
        rating: this.state.rating,
        progress: this.state.progress
      }
      this.post(gameInfo);
    } else {
      window.alert('Please Include Title On Submit');
    }
  }

  handleDelete(index) {
    this.props.games.splice(index, 1);
    console.log(this.props.games);
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    })
    console.log(this.state.title)
  }

  handleSystem(e) {
    this.setState({
      system: e.target.value
    })
    console.log(this.state.system)
  }

  handleRating(e) {
    this.setState({
      rating: e.target.value
    })
    console.log(this.state.rating)
  }

  handleProgress(e) {
    this.setState({
      progress: e.target.value
    })
    console.log(this.state.progress)
  }
  
  render() {
    return (
      <div>
        <form>
          <label>Title:</label>
            <input 
              type="text"
              name="title"
              onChange={this.handleTitle}/>
          <label>System:</label>
            <select 
              value={this.state.system}
              onChange={this.handleSystem}>
              <option value="PC">PC</option>
              <option value="PS4">PS4</option>
              <option value="Xbox One">Xbox One</option>
              <option value="Switch">Switch</option>
            </select>
          <label>Rating:</label>
            <select 
              value={this.state.rating}
              onChange={this.handleRating}>
              <option value="1/5">1/5</option>
              <option value="2/5">2/5</option>
              <option value="3/5">3/5</option>
              <option value="4/5">4/5</option>
              <option value="5/5">5/5</option>
            </select>
          <lable>Progress:</lable>
          <select 
              value={this.state.progress}
              onChange={this.handleProgress}>
              <option value="New Game">New Game</option>
              <option value="Started">Started</option>
              <option value="Completed">Completed</option>
              <option value="100%">100%</option>
            </select>
          <button onClick={this.handleSubmit}>Add New Game
          </button>
        </form>
        <br></br>
        <h3>My Games</h3>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>System</th>
              <th>Rating</th>
              <th>Progress</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.games.map((game, index) => {
              return (
                <tr>
                  <td>{game.title}</td>
                  <td>{game.system}</td>
                  <td>{game.rating}</td>
                  <td>{game.progress}</td>
                  <button onClick={() => {console.log(`This is ${JSON.stringify(game.title)} at index: ${index}`)}}>Edit</button>
                  <button onClick={() => {this.handleDelete(index)}}>Delete</button>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

//You need to export the class and the parent component needs to import.
export default GameList;