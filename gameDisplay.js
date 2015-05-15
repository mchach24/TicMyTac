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
*@param {htmlCanvas} subGame The canvas corresponding to the subGame where the mark will be made
*@param {int} squaredId The position on the canvas that the user clicked
*@param {int} turn The current turn; X is 1, O is 2
*/
function markSquare(subGame, squareId, turn) {
	
}
