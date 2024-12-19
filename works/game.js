const boardElement = document.getElementById("board");
let text = ``;
let boardSize = 3;
let type = `AI`;
let dave = 3;
let board = []
let gameplayer = ``
let AI = new TicTacToeAI();
function start() {
    document.getElementById("text").innerText = ``;
    board = []
    renderBoard()
    gameplayer = `O`
}

function renderBoard() {
    boardElement.innerHTML = '';
    for (let x = 0; x < boardSize; x++) {
        let list = []
        for (let y = 0; y < boardSize; y++) {
            const cell = document.createElement('button');
            cell.className = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.id = `${x},${y}`
            list.push('')
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
        board.push(list)
    }
}
function updateBoard() {
    for (x = 0; x < board.length; x++) {
        for (y = 0; y < board.length; y++) {
            document.getElementById(`${x},${y}`).innerText = board[x][y]
        }
    }
    return checkWin(board)
}
let result = ``;
function handleCellClick(event) {
    console.log(event.target)
    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);
    if (board[x][y] === '') {
        if (gameplayer == 'O') {
            board[x][y] = 'O';
            gameplayer = 'X'
            let value = updateBoard()
            if (value == null) {
                setTimeout(() => {
                    result = AI.move(board, AI.getStateBoard(board, 'O'), 'X')
                    gameplayer = 'O'
                    updateBoard()
                }, 100);
            }
            setTimeout(() => {
                if (checkWin(board) === null) return false;
                if (checkWin(board) === 'X') {
                    document.getElementById("text").innerText = `AI win!`;
                    gameplayer = ''
                } else {
                    if (checkWin(board) !== 'full') {
                        document.getElementById("text").innerText = `Дурний чоловічок переміг`;
                        gameplayer = ''
                    } else {
                        document.getElementById("text").innerText = `Нічия!`;
                        gameplayer = ''
                    }
                }
            }, 100);
        }
    }
}



function checkWin(board) {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
            return board[i][0];
        }
    }

    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
            return board[0][i];
        }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
        return board[0][2];
    }

    let isFull = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                isFull = false;
                break;
            }
        }
        if (!isFull) {
            break;
        }
    }
    return isFull ? 'full' : null;
}
