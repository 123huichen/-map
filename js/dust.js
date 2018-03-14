var dustObj = function()
{
	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];

	this.alpha = [];
}
dustObj.prototype.num = 30;
dustObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.amp[i] = 20 + Math.random() * 15;  //摇摆振幅
		this.NO[i] = Math.floor(Math.random() * 7);//随机序号
	}
	this.alpha = 0;
}	
dustObj.prototype.draw = function()//绘制漂浮物
{
 	this.alpha += deltaTime * 0.0005;
 	var l = Math.sin(this.alpha);
 	for (var i = 0; i < this.num; i++) 
	{
	    var no = this.NO[i];
	    ctx1.drawImage(dustPic[no], this.x[i] + this.amp[i] * l, this.y[i]);	
	}
}