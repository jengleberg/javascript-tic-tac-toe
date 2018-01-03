let turn = "X";
let winner = null;

startGame();

function startGame() {
	for (let i = 1; i <= 9; i++) {
		clearBoard(i);
	}
	setMessage(turn + " gets to go first");
	
}

function setMessage(msg) {
	document.getElementById("message").innerHTML = msg;
}

function nextMove(square) {
	if (winner != null) {
		setMessage(turn + " is the winner, start a new game")
	}
	else if (square.innerHTML == '') {
		square.innerHTML = turn;
		switchTurn();
	}
	else {
		setMessage("Pick an empty square.");
	}
}

function switchTurn() {
	if (checkWinner(turn)) {
		setMessage(turn + " Won!")
		winner = turn;
	}
	else if (turn == "X") {
		turn = "O";
		setMessage(turn + "'s turn.");
	}
	else {
		turn = "X";
		setMessage(turn + "'s turn.");
	}
}

function checkWinner(move) {
	let result = false;
	if (checkRow(1, 2, 3, move) ||
	    checkRow(4, 5, 6, move) ||
	    checkRow(7, 8, 9, move) ||
	    checkRow(1, 4, 7, move) ||
	    checkRow(2, 5, 8, move) ||
	    checkRow(3, 6, 9, move) ||
	    checkRow(1, 5, 9, move) ||
	    checkRow(3, 5, 7, move)) {
		   result = true;
	   }
	   return result;
}

function checkRow(a, b, c, move) {
	let result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}
	return result;
}

function getBox(number) {
	return document.getElementById(number).innerHTML;
}

function clearBoard(number) {
	document.getElementById(number).innerHTML = "";
}
