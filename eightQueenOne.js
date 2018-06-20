function checkSafe(x, y, board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (((i === x) || (j === y) || (Math.abs(i - x) === Math.abs(j - y))) && board[i][j]) {
                return 0;
            }
        }
    }
    return true;
}

function eightQueen(board) {
    if (board.length < 8) {
        return 'impossible';
    }
    const queue = [];
    const row = board.length;
    const col = board[0].length;
    queue.push({ position: 0, current: -1 });
    let nextQueen = 0;
    while (queue.length && nextQueen < 8) {
        const queen = queue.pop();
        let found = 0;
        for (let pos = queen.current + 1; pos < col; pos++) {
            if (checkSafe(queen.position, pos, board)) {
                found = true;
                board[queen.position][pos] = 1;
                break;
            }
        }
        if (found) {
            nextQueen+=1;
            queue.push({ position: nextQueen, current: -1 });
        } else {
            if (nextQueen === 0) {
                break;
            }
            nextQueen-=1;
            queue.push({ position: nextQueen, current: board[nextQueen].indexOf(1) });
            board[nextQueen] = new Array(col).fill(0);
        }
    }
    if (nextQueen === 8) {
        return board;
    } else {
        return 'impossible';
    }
}

const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(eightQueen(board));
