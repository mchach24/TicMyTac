function drawSubBoard(subGame) {
	var context = subGame.getContext('2d');
	context.beginPath();
	context.moveTo(subGame.width/3,subGame.height/3);
	context.lineTo(subGame.width/1.33,subGame.height/4);
	context.moveTo(subGame.width/4,subGame.height/1.33);
	context.lineTo(subGame.width/1.33,subGame.height/1.33);
	context.lineWidth = subGame.width/30;
    context.strokeStyle = '#cc1111';
	context.stroke();
}
