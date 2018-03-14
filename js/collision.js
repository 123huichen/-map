//判断大鱼和果实的距离
function momFruitsCollision()
{
	if (!data.gameOver) 
	{
        for (var i = 0; i < fruit.num; i++) 
	    {
		    if (fruit.alive[i]) 
		    {
			    //使用坐标差判断距离
			    var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			    if (l < 900) 
			    {
				    //吃掉果实
				    fruit.dead(i);
				    data.fruitNum++;
				    mom.momBodyCount++;
				    if (mom.momBodyCount > 7) 
				    {
					    mom.momBodyCount = 7;
				    }
				    if (fruit.fruitType[i] == "blue")//判断蓝色果实 
				    {
                        data.double = 2;
				    }
			    }
		    }
	    }
	}
}

//判断大鱼和小鱼的距离
function momBabyCollision()
{
	if (data.fruitNum > 0 && !data.gameOver) 
	{
		var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	    if (l < 900) 
	    {
		    //小鱼恢复
		    baby.babyBodyCount = 0;
		    //data => 0
		    mom.momBodyCount = 0;

		    data.addScore();
	    }
	}
}