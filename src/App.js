import React from 'react';
import './App.css';

import Game from './components/Game';
// const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// const initialSquare = '';





function App() {
  
  // const [activeSquare, setActiveSquare] = useState(initialSquare);
  // // const [squares, setSquares ] = useState(squares)

  // const clickSquare = (id) => {
  //   setActiveSquare(id);
    
  // }

  return (

    <Game />
    // <div className="App">
    //   This is a Tic Tac Toe game
       
    //   <div className='row'>
    //     {
    //       squares.map(square => {
    //         if (square < 3) {
    //           return <Tile key={square} id={square} click={clickSquare}/>

    //         }
    //       })
    //     }
    //   </div>
    //   <div className='row'>
    //     {
    //       squares.map(square => {
    //         if (square > 2 && square < 6) {
    //           return <Tile key={square} id={square} click={clickSquare}/>

    //         }
    //       })
    //     }
    //   </div>
    //   <div>
    //     {
    //       squares.map(square => {
    //         if (square > 5) {
    //           return <Tile key={square} id={square} click={clickSquare}/>

    //         }
    //       })
    //     }
    //   </div>

    //   {activeSquare}
    // </div>
  )
}

export default App;
