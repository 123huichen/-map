var aneObj = function(){
    //定义三个点控制海葵
    
    this.rootx = [];
    this.headx = [];
	this.heady = [];
    this.map = [];
    this.alpha = 0;
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function()
{ 

    for(var i = 0; i < this.num; i++)
    {
    	
        this.rootx[i] = i * 17 + Math.random() * 17;
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 100;
        this.map[i] = Math.random() * 30 + 30;//海藻摆动幅度
    }
}
aneObj.prototype.draw = function()
{   
    this.alpha +=deltaTime * 0.0005;//海藻摆动速度
    var l = Math.sin(this.alpha);//[-1,1]
    ctx2.save();
	ctx2.lineWidth = 20;
    ctx2.linCap = "round";
    ctx2.strokeStyle = "#28004D";
	ctx2.globalAlpha = 0.7;
    for(var i = 0; i < this.num; i++)
    {   
        //beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, line
    	ctx2.beginPath();
    	ctx2.moveTo(this.rootx[i], canHeight);
        this.headx[i] = this.rootx[i] + l * this.map[i];
    	ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
    	ctx2.stroke();
    } 
    ctx2.restore();
}