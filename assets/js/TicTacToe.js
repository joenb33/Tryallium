let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('game-board').children[row].children[col].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (checkDraw()) {
            alert('Draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (
            (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
            (board[0][i] === player && board[1][i] === player && board[2][i] === player)
        ) {
            return true;
        }
    }
    return (
        (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    );
}

function checkDraw() {
    return board.every(row => row.every(cell => cell !== ''));
}

function resetGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}

// Add the following functions to your existing JavaScript code
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
        }
    }
    return null;
}

function updateHighScore(player) {
    const scoreName = player + "Wins";
    let score = parseInt(getCookie(scoreName)) || 0;
    score++;
    setCookie(scoreName, score, 365); // Store high score for 1 year
    alert(player + " wins! Total wins: " + score);
}

// Modify the makeMove function
function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('game-board').children[row].children[col].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            updateHighScore(currentPlayer);
            resetGame();
        } else if (checkDraw()) {
            alert('Draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Add the following function to your existing JavaScript code
function updateScoreDisplay() {
    document.getElementById('xWins').innerText = getCookie("XWins") || 0;
    document.getElementById('oWins').innerText = getCookie("OWins") || 0;
}

// Modify the updateHighScore function
function updateHighScore(player) {
    const scoreName = player + "Wins";
    let score = parseInt(getCookie(scoreName)) || 0;
    score++;
    setCookie(scoreName, score, 365); // Store high score for 1 year
    alert(player + " wins! Total wins: " + score);
    updateScoreDisplay();
}

// Add this line at the end of your existing JavaScript code to update the score display when the page loads
updateScoreDisplay();

