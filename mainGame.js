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
var turn = 'X';
var gameOver = false;

function turnHandler(event, id, subGame) {
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
	x -= subGame.offsetLeft;
	y -= subGame.offsetTop;
	//alert(x + "," + y);
	if (x > 0 && y > 0 && x < subGame.width/3 && y < subGame.height/3) {
		position = 0;
	}
	else if (x > subGame.width/3 && y > 0 && x < subGame.width/1.5 && y < subGame.height/3) {
		position = 1;
	}
	else if( x > subGame.width/1.5 && y > 0 && x < subGame.width && y < subGame.height/3) {
		position = 2;
	}
	else if (x > 0 && y > subGame.height/3 && x < subGame.width/3 && y < subGame.height/1.5) {
		position = 3;
	}
	else if (x > subGame.width/3 && y > subGame.height/3 && x < subGame.width/1.5 && y < subGame.height/1.5) {
		position = 4;
	}
	else if (x > subGame.width/1.5 && y > subGame.height/3 && x < subGame.width && y < subGame.height/1.5) {
		position = 5;
	}
	else if (x > 0 && y > subGame.height/1.5 && x < subGame.width/3 && y < subGame.height) {
		position = 6;
	}
	else if (x > subGame.width/3 && y > subGame.height/1.5 && x < subGame.width/1.5 && y < subGame.height) {
		position = 7;
	}
	else if (x > subGame.width/1.5 && y > subGame.height/1.5 && x < subGame.width && y < subGame.height) {
		position = 8;
	}
	alert(position);
	//markSquare(subGame, position, turn);
}