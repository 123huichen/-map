var dataObj = function()
{
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}	
dataObj.prototype.draw = function()
{
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.fillStyle = "white";
	ctx1.fillText("SCORE: " + this.score, w * 0.5, h - 30);

	if (this.gameOver) 
	{
	    this.alpha += deltaTime * 0.0005;
	    if (this.alpha > 1) 
	    {
            this.alpha = 1;
	    }
	    ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha +")";
	    ctx1.fillText("GAMEOVER", w * 0.5, h * 0.4);
	    ctx1.fillText("没有重新开始按钮请刷新页面", w * 0.5, h * 0.5);
	}
	ctx1.restore();

}
//总分值计算
dataObj.prototype.addScore = function()
{
	this.score += this.fruitNum * 10 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}