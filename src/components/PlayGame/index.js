// External libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ButtonLink from '../ButtonLink';

// Styles
import './PlayGame.css';

const PlayGame = () => {
  return (
    <div className="container-game">
      <div className="game-title">
        <h1> Connect 4 Game </h1>
        <ButtonLink
          name="Play!"
          linkTo="/game"
        />
      </div>
    </div>
  );
};

export default PlayGame;
