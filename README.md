# Connect4 Game
This is an game application called connect 4. Connect 4 is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid, if you want to know more information please see this [link](https://en.wikipedia.org/wiki/Connect_Four).

You can see the project working in this [link](https://connect4-game-test.herokuapp.com/)

## Game Rules
Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.

Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column. So, in every turn the introduced piece may be placed at most on seven different squares.

The winner is the first player who gets a straight line made with four own pieces and no gaps between them.


## Initialize the application
To see the project working, first you need to install the project dependencies with the next command
```
npm install
```
After the installation, to run the project you can use the command
```
npm start
```

The project by default will be listening in the next url http://localhost:3000/

## Folder Structure
The project should look like this:

```
connect4-game/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      App/
      BoardGrid/
      ButtonGeneral/
      ButtonLink/
      Game/
      PlayGame/
    utils/
    index.css
    index.js
```
