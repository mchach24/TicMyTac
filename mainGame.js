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