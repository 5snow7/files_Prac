	
function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 
 function onOff(){
	if( k%2==0){noLoop();}
	if (k%2==1){loop();}
	k++;