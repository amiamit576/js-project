const gameBoard = document.querySelector('#gamebord');
const infoDisplay = document.querySelector('#info');

const startCells = ['', '', '', '', '', '', '', '', ''];
let go = 'circle';
infoDisplay.textContent='circle goes first'

//create cboard
function createBoard() {
    startCells.map((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click',addGo)
        gameBoard.append(cellElement);

    })
};


createBoard();
// add cross or circle
function addGo(e) {
    // console.log(e.target);
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === 'circle' ? 'cross' : "circle"
    infoDisplay.textContent = `it is now` + go + `'s go.`;
    e.target.removeEventListener('click',addGo)
    checkScore()

    
}

function checkScore() {
    const allsquare = document.querySelectorAll('.square')
    console.log(allsquare);
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6],[1, 4, 7],[2, 5, 8],
        [0,4,8],[2,4,6]
    ]
    winningCombos.forEach(array => {
     
        const circleWins = array.every(cell =>  allsquare[cell].firstChild?.classList.contains('circle')
        );
        if (circleWins) {
            infoDisplay.textContent = "circle wins"
            allsquare.forEach(square => square.replaceWith(square.cloneNode(true)));
            return
        }
  })
    winningCombos.forEach(array => {
        
        const crossWins = array.every(cell => allsquare[cell].firstChild?.classList.contains('cross'));
        if (crossWins) {
            infoDisplay.textContent = "cross wins"
            allsquare.forEach(square => square.replaceWith(square.cloneNode(true)));
            return
        }
    })
    

   
  
}
 

