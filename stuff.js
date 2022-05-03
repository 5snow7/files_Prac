function addText(){
 //len=document.getElementById("text1").value;
  par1.innerHTML="change text Dit";
  par2.innerHTML="testing";
  clear_Can();
 set();
}

function tFd(len){
	t.fd(len);
}

function tRt(an){
	t.rt(an);
}


let cnt=0;
function blink(){
	cnt++;
	if(cnt%2==0){t.set1(Math.random()*300,Math.random()*300,Math.random()*180);fourSq(t,100);
	par1.style.left=xpos+"px";xpos++;}
else{clear_Can();}
	
}


