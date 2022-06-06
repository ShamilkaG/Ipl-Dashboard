import React from 'react'
import { Link } from 'react-router-dom';

import './MatchSmallCard.scss';

export const MatchSmallCard = ({teamName,match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    return (
    // <div className='MatchSmallCard'>
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard Lost-card'}>
      {/* <p>Match Small Card</p> */}
      {/* <p>{match.team1} vs {match.team2}</p> */}
      {/* <h3> vs <Link to={otherTeamRoute}>{otherTeam}</Link> </h3> */}
      <span className="vs">vs</span>
        <h1>
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>
      <p className='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  )
}


