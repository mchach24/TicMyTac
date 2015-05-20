var subGames = [];
subGames.push(new subGame(0, document.getElementById('f11')));
subGames.push(new subGame(1, document.getElementById('f12')));
subGames.push(new subGame(2, document.getElementById('f13')));
subGames.push(new subGame(3, document.getElementById('f21')));
subGames.push(new subGame(4, document.getElementById('f22')));
subGames.push(new subGame(5, document.getElementById('f23')));
subGames.push(new subGame(6, document.getElementById('f31')));
subGames.push(new subGame(7, document.getElementById('f32')));
subGames.push(new subGame(8, document.getElementById('f33')));
var turn = 1; //1 - X, 2 - O
var gameOver = false;

function turnHandler(event, id, canvas) {
	if (gameOver)
		return;
	var position;
	var x;
	var y;
	if (event.pageX || event.pageY) {
		x = event.pageX;
		y = event.pageY;
	}
	else {
		x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	if (x > 0 && y > 0 && x <= canvas.width/3 && y <= canvas.height/3) {
		position = 0;
		x = 5;
		y = 5;
	}
	else if (x > canvas.width/3 && y > 0 && x <= canvas.width/1.5 && y <= canvas.height/3) {
		position = 1;
		x = 55;
		y = 5;
	}
	else if( x > canvas.width/1.5 && y > 0 && x <= canvas.width && y <= canvas.height/3) {
		position = 2;
		x = 105;
		y = 5;
	}
	else if (x > 0 && y > canvas.height/3 && x <= canvas.width/3 && y <= canvas.height/1.5) {
		position = 3;
		x = 5;
		y = 55;
	}
	else if (x > canvas.width/3 && y > canvas.height/3 && x <= canvas.width/1.5 && y <= canvas.height/1.5) {
		position = 4;
		x = 55;
		y = 55;
	}
	else if (x > canvas.width/1.5 && y > canvas.height/3 && x <= canvas.width && y <= canvas.height/1.5) {
		position = 5;
		x = 105;
		y = 55;
	}
	else if (x > 0 && y > canvas.height/1.5 && x <= canvas.width/3 && y <= canvas.height) {
		position = 6;
		x = 5;
		y = 105;
	}
	else if (x > canvas.width/3 && y > canvas.height/1.5 && x <= canvas.width/1.5 && y <= canvas.height) {
		position = 7;
		x = 55;
		y = 105;
	}
	else if (x > canvas.width/1.5 && y > canvas.height/1.5 && x <= canvas.width && y <= canvas.height) {
		position = 8;
		x = 105;
		y = 105;
	}
	valid = subGames[id].movePlayed(turn, position, x, y);
	if (turn == 1)
		turn = 2;
	else
		turn = 1;
	if (valid)
	{
		deactivateAllBut(position);
		detectGameWin();
	}
	
	
	
}

function deactivateAllBut(x)
{
	//alert("mainGame - deactiveAllBut()");
	if (subGames[x].gameOver)
	{
		for (i = 0; i < 9; i++)
		{
			subGames[i].setActive();
		}
	}
	else
	{
		subGames[x].setActive();
		for (i = 0; i < 9; i++)
		{
			if (i == x) continue;
			subGames[i].setInactive();
		}
	}
}
function detectGameWin() {
	var winner = 0;
	if (subGames[0].winner != 0 && subGames[0].winner != 3 && subGames[0].winner == subGames[1].winner && subGames[0].winner == subGames[2].winner) {
		alert("mainGame - detectGameWin() - win type 1");
		winner = subGames[0].winner;
	}
	else if (subGames[3].winner != 0 && subGames[3].winner != 3 && subGames[3].winner == subGames[4].winner && subGames[3].winner == subGames[5].winner) {
		alert("mainGame - detectGameWin() - win type 2");
		winner = subGames[3].winner;
	}
	else if (subGames[6].winner != 0 && subGames[6].winner != 3 && subGames[6].winner == subGames[7].winner && subGames[6].winner == subGames[8].winner) {
		alert("mainGame - detectGameWin() - win type 3");
		winner = subGames[6].winner;
	}
	else if (subGames[0].winner != 0 && subGames[0].winner != 3 && subGames[0].winner == subGames[3].winner && subGames[0].winner == subGames[6].winner) {
		alert("mainGame - detectGameWin() - win type 4");
		winner = subGames[0].winner;
	}
	else if (subGames[1].winner != 0 && subGames[1].winner != 3 && subGames[1].winner == subGames[4].winner && subGames[1].winner == subGames[7].winner) {
		alert("mainGame - detectGameWin() - win type 5");
		winner = subGames[1].winner;
	}
	else if (subGames[2].winner != 0 && subGames[2].winner != 3 && subGames[2].winner == subGames[5].winner && subGames[2].winner == subGames[8].winner) {
		alert("mainGame - detectGameWin() - win type 6");
		winner = subGames[2].winner;
	}
	else if (subGames[0].winner != 0 && subGames[0].winner != 3 && subGames[0].winner == subGames[4].winner && subGames[0].winner == subGames[8].winner) {
		alert("mainGame - detectGameWin() - win type 7");
		winner = subGames[0].winner;
	}
	else if (subGames[2].winner != 0 && subGames[2].winner != 3 && subGames[2].winner == subGames[4].winner && subGames[2].winner == subGames[6].winner) {
		alert("mainGame - detectGameWin() - win type 8");
		winner = subGames[2].winner;
	}
	if (winner != 0)
		gameOver = true;
}