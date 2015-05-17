/**
*@param {htmlCanvas} subGame The canvas that 
*/
function drawSubBoard(subGame) {
	var context = subGame.getContext('2d');
	context.beginPath();
	context.moveTo(subGame.width/30,subGame.height/3);
	context.lineTo(subGame.width/1.034,subGame.height/3);
	
	context.moveTo(subGame.width/30,subGame.height/1.5);
	context.lineTo(subGame.width/1.034,subGame.height/1.5);
	
	context.moveTo(subGame.width/3,subGame.height/30);
	context.lineTo(subGame.width/3,subGame.height/1.034);
	
	context.moveTo(subGame.width/1.5,subGame.height/30);
	context.lineTo(subGame.width/1.5,subGame.width/1.034)
	
	context.lineWidth = subGame.width/60;
    context.strokeStyle = '#000000';
	context.stroke();
}
/**
*This function draws an X or an O in the appropriate position of the canvas
*@param {htmlCanvas} subGame The canvas corresponding to the subGame where the mark will be made
*@param {int} squaredId The position on the canvas that the user clicked
*@param {int} turn The current turn; X is 1, O is 2
*/
function markSquare(subGame, squareId, turn) {
	var xSize = 0;
	var ySize = 0;
	if (turn == 0)
	{
		xSize = subGame.width/3 - 2;
		ySize = subGame.height/3 - 2;
	}
	else if (turn == 1)
	{
		xSize = subGame.width/6;
		ySize = subGame.height/6;
	}
	
	
	
}

/**
*This function draws an X or an O over the entire canvas, which signifies that the subgame
*is over and the X or O player won
*@param {HTMl Canvas} subGame The canvas corresponding to the sub game where the mark will be made
*@param {int} turn The current turn; 1 - X, 2 - O
*/
function markCanvas(subGame, turn) {
	if (turn == 1)
	{
		drawX(subGame, subGame.width - 5, subGame.height() - 5, 1);
	}	
	else if (turn == 2)
	{
		drawO(subGame, subGame.width/2, subGame.height()/2, 1);
	}

}


//size: 0 - small, 1 - big
function drawO(canvas, xPos, yPos, type) {
	var size = 0;
	if (type == 0)
		size = canvas.width/6 - 2;
	else if (type == 1)
		size = canvas.width/2 - 5;
		

	var context = canvas.getContext('2d');
    var centerX = xPos;
    var centerY = yPos;
    var radius = size;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    if (size == 0)
    	context.lineWidth = 2;
    else if (size == 1)
    	context.lineWidth = 5;
    context.strokeStyle = '#212121';
    context.stroke();
}

function drawX(canvas, xPos, yPos, type) {
	var size = 0;
	if (type == 0)
		size = canvas.width/3 - 2;
	else if (type == 1)
		size = canvas.width - 5;

	var context = canvas.getContext('2d');
	context.beginPath();
	context.moveTo(xPos,yPos);
	context.lineTo(xPos + size, yPos + size);
	context.moveTo(xPos + size, yPos);
	context.lineTo(xPos, yPos + size);
	if (size == 0)
    	context.lineWidth = 2;
    else if (size == 1)
    	context.lineWidth = 5;    
    context.strokeStyle = '#212121';
	context.stroke();
}
