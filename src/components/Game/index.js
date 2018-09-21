// External libraries
import React, { Component } from 'react';

// Styles
import './Game.css';

// Utils
import { matches } from '../../utils';

// Components
import BoardGrid from '../BoardGrid';
import ButtonLink from '../ButtonLink';
import ButtonGeneral from '../ButtonGeneral';

class Connec4 extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      board: new Array(7).fill(new Array(6).fill(null)),
      playerMove: 'yellow',
      playerTurn: 'red',
      winner: {
        player: '',
        win: false,
      },
    }
  }

  // Life cycle methods
  componentDidUpdate() {
    const { board, winner } = this.state;
  
    // Check winner
    const checkWinner =  matches.checkGameWinner(board);

    if ((winner.win !== true) && checkWinner) {
      this.setState((prevState) => {
        return {
          ...prevState,
          winner: {
            ...prevState.winner,
            player: prevState.playerMove,
            win: !prevState.winner.win,
          },
        }
      });
    }
  }

  // Methods
  makePlayerMove = (boardGridId) => {
    const { board, playerTurn } = this.state;

    // Create copy of the board
    const boardCopy = board.map((arr) => arr.slice());
    if (boardCopy[boardGridId].indexOf(null) !== -1) {
      // Fill cell in reverse order
      const boardColumn = boardCopy[boardGridId].reverse();
      boardColumn[boardColumn.indexOf(null)] = playerTurn;
      boardColumn.reverse();
      this.setState((prevState) => {
        return {
          ...prevState,
          playerMove: prevState.playerTurn,
          playerTurn: (prevState.playerTurn === 'yellow') ? 'red' : 'yellow',
          board: boardCopy,
        }
      });
    }
  }
  handleClickBoard = (boardGridId) => {
    const { winner } = this.state;

    if (!winner.win) this.makePlayerMove(boardGridId);
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        board: new Array(7).fill(new Array(6).fill(null)),
        playerMove: 'yellow',
        playerTurn: 'red',
        winner: {
          player: '',
          win: false,
        },
      }
    });
  }

  // Render
  render() {
    const { board, winner, playerTurn } = this.state;

    // Setup board grid
    const boardGrid = [...Array(board.length)].map((value, index) => {
      return <BoardGrid
        key={index}
        cells={board[index]}
        handleClick={() => this.handleClickBoard(index)}
      />
    });
    
    return (
      <div className="container-game-players">
        <h2>Connect 4 Game</h2>
        <div className="container-board-game">
          {boardGrid}
        </div>
        {
          (winner.win)
            ? (
              <div className="container-winner">
                <p>🏆🏆Player {`${winner.player}`} wins🏆🏆</p>
              </div>
            ) : (
              <div className="container-winner">
                <p>Player {`${playerTurn}`} turn</p>
              </div>
            )
        }
        <div className="container-buttons">
          <ButtonLink
            name="Go Back"
            linkTo="/"
          />
          <ButtonGeneral
            name="Reset Game"
            handleClick={this.handleReset}
          />
        </div>
      </div>
    );
  }
};

export default Connec4;
