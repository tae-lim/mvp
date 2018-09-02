import React from 'react';

const TopGames = (props) => {
  return (
      <div>
        <h4>Trending Games</h4>
        <table>
          <tr>
            <th>Title</th>
            {/* <th>Summary</th> */}
            <th>Critic Ratings</th>
            <th>User Ratings</th>
            <th>URL</th>
          </tr>

          {props.popGames.map((game) => {
             return (
              <tr>
                  <td>{game.name}</td>
                  {/* <td>{game.summary}</td> */}
                  <td>{game.aggregated_rating || 'Not Released'}</td>
                  <td>{game.rating || 'Not Released'}</td>
                  <td>{game.url}</td>
              </tr>
             )
          })}
        </table>
      </div>
  )
};

export default TopGames;



