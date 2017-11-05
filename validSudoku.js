/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Check all horizontal
    for (let i = 0; i < board.length; i++) {
        const keyList = [];
        for (let j = 0; j < board[i].length; j++) {
            const key = board[i][j];
            if (key === '.') { continue; }
            if (keyList[key]) {
                return false;
            } else {
                keyList[key] = true;
            }
        }
    }
    // Check all vertical
    for (let i = 0; i < board[0].length; i++) {
        const keyList = [];
        for (let j = 0; j < board.length; j++) {
            const key = board[j][i];
            if (key === '.') { continue; }
            if (keyList[key]) {
                return false;
            } else {
                keyList[key] = true;
            }
        }
    }
    // Check cubes
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const row = i * 3;
            const col = j * 3;
            const keyList = [];
            for (let m = row; m < row + 3; m++) {
                for (let n = col; n < col + 3; n++) {
                    const key = board[m][n];
                    if (key === '.') { continue; }
                    if (keyList[key]) {
                        return false;
                    } else {
                        keyList[key] = true;
                    }
                }
            }
        }
    }
    return true;
};


const board = [[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]];

console.log(isValidSudoku(board));