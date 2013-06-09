function desenhaCirculo(id,x, y, r, cor){

	var c=id;
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx2 = ctx;

	ctx.arc(y,x,r,0,2*Math.PI);
	ctx.fill();

	ctx.strokeStyle = cor;
    ctx.lineWidth = 5;
    ctx.stroke()

}

function cliqueDesenhaCirculo(id,x, y, r, cor){

	var c=id;
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx2 = ctx;

	ctx.arc(y,x,r,0,2*Math.PI);
	ctx.fillStyle = cor;
	ctx.fill();

}

function desenhaPrato(id,x, y, r, cor){
	var c=id;
	var ctx=c.getContext("2d");
	ctx.beginPath();


	ctx.arc(y,x,r,0,2*Math.PI);
	ctx.fill();

	ctx.strokeStyle = cor;
    ctx.lineWidth = 5;
    ctx.stroke();
}

function cliqueDesenhaPrato(id,x, y, r, cor){
	var c=id;
	var ctx=c.getContext("2d");
	ctx.beginPath();

	ctx.arc(y,x,r,0,2*Math.PI);
	ctx.fillStyle = cor;
	ctx.fill();
}