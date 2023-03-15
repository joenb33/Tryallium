<?php
$pageTitle = "Random API | A Wacky Collection of Fun API Requests";
$pageDescription = "Get ready for some wild and wacky API requests, loaded with jokes, fun facts, and more! Explore our website and experience the fun of our random API reques";
$pageKeywords = "API, API requests, fun facts, jokes, dog breeds, Kanye West quotes";
$pageAuthor = "Joen";
$pageName = "TicTacToe";
include("../includes/header.php");
?>

<h1>Tic Tac Toe</h1>
    <div id="scores">
        <p>Player X Wins: <span id="xWins">0</span></p>
        <p>Player O Wins: <span id="oWins">0</span></p>
    </div>
    <div id="game-board">
        <div class="row">
            <div class="cell" onclick="makeMove(0, 0)"></div>
            <div class="cell" onclick="makeMove(0, 1)"></div>
            <div class="cell" onclick="makeMove(0, 2)"></div>
        </div>
        <div class="row">
            <div class="cell" onclick="makeMove(1, 0)"></div>
            <div class="cell" onclick="makeMove(1, 1)"></div>
            <div class="cell" onclick="makeMove(1, 2)"></div>
        </div>
        <div class="row">
            <div class="cell" onclick="makeMove(2, 0)"></div>
            <div class="cell" onclick="makeMove(2, 1)"></div>
            <div class="cell" onclick="makeMove(2, 2)"></div>
        </div>
    </div>
    <button id="ResetButton" onclick="resetGame()">Reset Game</button>
    <p class="gpt-4-credit">This was made with GPT-4</p>


<?php
include("../includes/footer.php");