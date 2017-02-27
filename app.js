( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "main" ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	} );
	
	var lastX = 0, 
    lastY = 0, 
    mouseBtn = false, 
    brushSize = 4;
	var canvas, context;
	
	function init(){
	
		canvas = document.getElementById('canvas');
		context = canvas.getContext("2d");
		canvas.addEventListener('touchstart', startDraw);
		canvas.addEventListener('touchmove', drawStep);
		canvas.addEventListener('touchend', stopDraw);				
		canvas.addEventListener('mouseout', stopDraw);
	}
	
	function updateLastPos(e)
	{
	   if (e.type.indexOf('touch') >= 0)
	   {
	      var pos = e.touches.item(0);
	      lastX = pos.clientX-pos.target.offsetLeft;
	      lastY = pos.clientY-pos.target.offsetTop;
	   }
	   else
	   {
	      lastX = e.offsetX;
	      lastY = e.offsetY;
	   }
	}
	
	function startDraw(e)
	{
	   updateLastPos(e);
	   context.beginPath();
	   context.moveTo(lastX, lastY);
	   context.lineWidth= brushSize;
	   mouseBtn = true;
	}
	
	function drawStep(e)
	{
	   if (mouseBtn)
	   {
	      updateLastPos(e);
	      context.lineTo(lastX, lastY);
	      context.strokeStyle="red";
	      context.stroke();
	   }
	}
	
	function stopDraw(e)
	{			
	   mouseBtn = false;
	   tau.changePage("selectorPage");
	   console.log("vnfdkbfd");
	}
	
	init();
} () );

