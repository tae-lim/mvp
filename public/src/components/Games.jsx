import React from 'react';
import $ from "jquery";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      system: '',
      rating: '',
      progress: '',
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSystem = this.handleSystem.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.post = this.post.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('handleSubmitWorks');
    let gameInfo = {
      title: this.state.title,
      system: this.state.system,
      rating: this.state.rating,
      progress: this.state.progress
    }
    this.post(gameInfo);
    
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
        <table>
          <tr>
            <th>Title</th>
            <th>System</th>
            <th>Rating</th>
            <th>Progress</th>
          </tr>
             
        </table>
      </div>
    )
  }
}

//You need to export the class and the parent component needs to import.
export default GameList;

// {props.games.map((game) => {
//   return (
//     <tr>
//       <td>Something</td>
//       <td>Something</td>
//       <td>Something</td>
//       <td>Something</td>
//     </tr>
//     )
//   })} 