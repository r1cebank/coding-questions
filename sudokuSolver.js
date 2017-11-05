/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const emptyCoord = findHole(board);
    if (emptyCoord[0] === -1) {
        return true;
    }
    for (let num = 1; num <= 9; num++) {
        if (isSafe(board, emptyCoord[0], emptyCoord[1], num + '')) {
            board[emptyCoord[0]][emptyCoord[1]] = num + '';
            if (solveSudoku(board)) {
                return true;
            }
            board[emptyCoord[0]][emptyCoord[1]] = '.';
        }
    }
    return false;
};

var isSafe = function(board, row, col, num) {
    return safeHorizontal(board, row, num) &&
           safeVertical(board, col, num) &&
           safeCube(board, row - row % 3, col - col % 3, num);
}

var safeHorizontal = function(board, row, num) {
    for (let col = 0; col < 9; col++) {
        if (board[row][col] === num) {
            return false;
        }
    }
    return true;
}

var safeVertical = function(board, col, num) {
    for (let row = 0; row < 9; row++) {
        if (board[row][col] === num) {
            return false;
        }
    }
    return true;
}

var safeCube = function(board, row, col, num) {
    for (let m = row; m < row + 3; m++) {
        for (let n = col; n < col + 3; n++) {
            if (board[m][n] === num) {
                return false;
            }
        }
    }
    return true;
}

var findHole = function(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '.') {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const board = [
    [".", ".", "2", "4", ".", ".", "5", ".", "."],
    [".", "4", ".", ".", ".", ".", ".", "3", "."],
    [".", ".", "3", ".", "1", ".", ".", "2", "."],
    ["2", ".", ".", ".", "4", "6", ".", "1", "9"],
    [".", ".", ".", "1", "8", ".", "3", ".", "."],
    [".", ".", "4", ".", ".", "9", ".", "7", "."],
    [".", "2", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "6", ".", "5", ".", ".", ".", "3"],
    ["4", ".", "5", ".", "9", ".", ".", ".", "."]
];

solveSudoku(board);

console.log(board);