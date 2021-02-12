

const players = [ 'X', 'O' ];
let activePlayer = 0;


let board = [  ['*', '*', '*'], ['*', '*', '*'], ['*', '*', '*']  ];

function putToken() {

    // Elegir jugador
    let player = players[activePlayer]


    // Escoger casilla
    let fil = Number(prompt('Elige fila entre 0, 1, 2') );
    let col = Number(prompt('Elige columna entre 0, 1, 2') );


    // Marcar casilla
    

    board[fil][col] = player;

    // Cambiar de jugador
    if(activePlayer === 0) {
        activePlayer = 1;
    }else {
        activePlayer = 0;
    }


    // activePlayer = activePlayer === 0 ? 1 : 0;

}
putToken();
putToken();




























// Decidir qué jugador va primero
// Player 1 = 'X'





// let fil = Number(prompt('Elige fila entre 0, 1, 2') );
// let col = Number(prompt('Elige columna entre 0, 1, 2') );

// board[fil][col] = player1;
// board[fil][col] = player2;
// for(let i = 0; i < board.length; i++) {
//     console.log('Array principal, primera vuelta: ' + i);
    
    
    
//     // if(board[i] !== empty) {
        
//     // }

//     for(j = 0; j < board[i].length; j++) {
//         console.log('Sub-Array, primera vuelta: ' + board[i][j]);
//         console.log('Sub-Array, primera vuelta: ' + board[i][j]);
        
        
//     }

// }




