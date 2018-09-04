import React from 'react';
import { Table } from 'react-bootstrap';

const TopGames = (props) => {
  return (
    <div>
      <h3>Trending Games</h3>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Summary</th>
            <th>Critic Ratings</th>
            <th>User Ratings</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {props.popGames.map((game) => {
            return (
              <tr>
                <td>{game.name}</td>
                <td>{game.summary}</td>
                <td>{game.aggregated_rating || 'Not Released'}</td>
                <td>{game.rating || 'Not Released'}</td>
                <td>{game.url}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
};

export default TopGames;



