let len=50;
function set(){
	clear_Can();
	t.set1(300,300,0);
	t.rt(45);
    fourSq(t,50);
	t.fd(len);
	//text(strText,30,10);
   }
function sqR(t,len){
	t.fd(len);t.rt(90);
	t.fd(len);t.rt(90);
	t.fd(len);t.rt(90);
	t.fd(len);t.rt(90);
}
function sqL(t,len){
	t.fd(len);t.lt(90);
	t.fd(len);t.lt(90);
	t.fd(len);t.lt(90);
	t.fd(len);t.lt(90);
}
function fourSq(t1,len){
t1.fd(100);sqL(t1,len);t1.rt(90);
t1.fd(100);sqL(t1,len);t1.rt(90);
t1.fd(100);sqL(t1,len);t1.rt(90);
t1.fd(100);sqL(t1,len);
}

function moveId(){
 keyIn=event.key;
if(keyIn=='a'){par1.style.left=xpos+"px";}
xpos+=10;
if(keyIn=='s'){t.rt(10);fourSq(t,50);}

if(keyIn=='b'){t.rt(25);addText();}
}

//if(keyIn=='b'){t.set1(50,50,0);sqL(t,40);}

function sqs1(t1,len){
	t1.fd(len);t1.lt(90);
	t1.fd(len);t1.rt(90);
	t1.fd(len);t1.rt(90);
	t1.fd(len);t1.lt(90);
	t1.fd(len);
	
}

function rect1(){
	ct.beginPath();
   ct.rect(200, 200, 150, 100);
    ct.stroke();
}


/*function draw(){
	background(200,0,0);
	clear_Can();
	t.fd(15);t.rt(Math.random()*180);
	
}
*/
function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
 