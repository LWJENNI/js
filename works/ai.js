class TicTacToeAI {
    constructor() {
        this.size = 3;
    }

    getStateBoard(boardtemp, figure) {
        const size = 3;
        const MINOR_THREAT = 0.1;
        const MODERATE_THREAT = 0.2;
        const CRITICAL_THREAT = 0.5;
    
        let boardupdate = Array(size).fill().map(() => Array(size).fill(0));
        const opponent = figure === 'X' ? 'O' : 'X';

        const analyzeLine = (line) => {
            const figureCount = line.filter(cell => cell === 1).length;
            const opponentCount = line.filter(cell => cell === -1).length;
            if (opponentCount > 0) return 0;
            if (figureCount === 2) return CRITICAL_THREAT;
            if (figureCount === 1) return MINOR_THREAT;
            return 0;
        };
    
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (boardtemp[i][j] === figure) {
                    boardupdate[i][j] = 1;
                } else if (boardtemp[i][j] === opponent) {
                    boardupdate[i][j] = -1;
                }
            }
        }
    
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (boardupdate[i][j] === 0) {
                    let threats = [];
    
                    threats.push(analyzeLine(boardupdate[i]));
    
                    let col = boardupdate.map(row => row[j]);
                    threats.push(analyzeLine(col));
    
                    if (i === j) {
                        let mainDiag = [boardupdate[0][0], boardupdate[1][1], boardupdate[2][2]];
                        threats.push(analyzeLine(mainDiag));
                    }
    
                    if (i + j === size - 1) {
                        let antiDiag = [boardupdate[0][2], boardupdate[1][1], boardupdate[2][0]];
                        threats.push(analyzeLine(antiDiag));
                    }
    
                    let minorThreatCount = threats.filter(t => t === MINOR_THREAT).length;
                    if (minorThreatCount >= 2) {
                        boardupdate[i][j] = MODERATE_THREAT;
                    } else {
                        boardupdate[i][j] = Math.max(...threats);
                    }
                }
            }
        }
        console.log(boardupdate)
        return boardupdate;
    }
    move(boardoriginal, boardgrade, figure) {
        
        const symbol = figure === 'O' ? 'O' : 'X';
    
        if (boardoriginal[1][1] == '') {
            return boardoriginal[1][1] = symbol;
        }
    
        const aiPredictions = this.getStateBoard(boardoriginal, symbol);
        console.log(aiPredictions)
        result = placeFigure(aiPredictions, 0.5, symbol, boardoriginal); 
        if (result) return result;
        
        result = placeFigure(aiPredictions, 0.2, symbol, boardoriginal);  
        if (result) return result;
        
        result = placeFigure(boardgrade, 0.5, symbol, boardoriginal);     
        if (result) return result;
        
        result = placeFigure(boardgrade, 0.2, symbol, boardoriginal);     
        if (result) return result;
        
        result = placeFigure(boardgrade, 0.1, symbol, boardoriginal);     
        if (result) return result;
        
    }
}

function placeFigure(board, value, figure, mainboard) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] == value) {
                mainboard[x][y] = figure;
                return mainboard;
            }
        }
    }
    return false;
}

function tryCenter(board, figure) {
    const centerX = Math.floor(board.length / 2);
    const centerY = Math.floor(board[0].length / 2);
    if (board[centerX][centerY] === '') {
        board[centerX][centerY] = figure;
        return true;
    }
    return false;
}
