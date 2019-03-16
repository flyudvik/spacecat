function main() {
	var i = 1;
	loop();
	var tid = setInterval(loop, 15000);

	function loop(){
		var h = $(".background").height();
		var w = $(".background").width();

		var top = Math.random();
		var left = Math.random();

		var endTop = Math.random();
		var endLeft = Math.random();

		var side = randomIntFromInterval(1, 2);

		if (i > 0)
		{
			if (side == 1)
			{
				top = -115;
				left = w * left;  
				endTop = h + 115;
				endLeft = w * endLeft;
			}
			else
			{
				top = h + 115;
				left = w * left;
				endTop = -115;
				endLeft =  w * endLeft;
			}
		}
		else
		{
			if (side == 1)
			{
				left = -180; 
				top = h * top; 
				endLeft = w + 180;
				endTop  = h * endTop;
			}
			else
			{
				left = w + 180;
				top = h * top;
				endLeft = -180;
				endTop = h * endTop;
			}
		}
			$(".animate").remove();
			$(".background").append('<div class="animate" style="position: absolute; top:' + top + 'px; left:' + left +'px"><img src="cat.png" style="margin:auto; width:100%; height:100%; display:block"></div>');
			$(".animate").animate({
			    left: endLeft + "px",
			    top: endTop + "px"
			}, 15000);

			i = -i;
		
	}

	function randomIntFromInterval(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
}

$(document).ready(main);