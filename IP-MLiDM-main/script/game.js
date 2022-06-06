var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var blocksize = 10;
var widthInBlock = width / blocksize;
var heightInBlock = height / blocksize;
var score = 0;

var border = function()
{
    ctx.fillSrtyle = "Gray";
    ctx.fillRect(0,0,width,blocksize);
    ctx.fillRect(0,height - blocksize,width,blocksize);
    ctx.fillRect(0,0,blocksize,width);
    ctx.fillRect(width - blocksize,0,blocksize,height);
}
var drawScore = function()
{
    ctx.fillSrtyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Счет: " + score,blocksize,blocksize)
}
var gameOver = function()
{
    clearInterval();
    ctx.font = "60px";
    ctx.fillSrtyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры",width/2,height/2)
}
var