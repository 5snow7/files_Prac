let mov=[];let siz=[];let rot=[];
let cont=2;let pics=[];let picCt=0;
function haltpic(){
cont=1;
}

function startpic(){
cont=2;	
}

function butpic1(){picCt=1;}
function butpic2(){picCt=2;}
function butpic3(){picCt=3;}
function butpic4(){picCt=4;}
function butpic5(){picCt=5;}


function startUp(t){
	for(let j=1;j<t;j=j+1){mov[j]=0;siz[j]=0;rot[j]=0;
		pics[j]=document.getElementById("pic"+j);
	
	}}

function main1(b,s,m,r){
let r1=r+"deg";
b.style.transform="rotate("+r1+")";
b.style.width=s+"px";
b.style.height=s+"px";
b.style.left=m+"px";
}


function makePics(p){
if(mov[p]<500&&cont==2){main1(pics[p],siz[p],mov[p],rot[p]);rot[p]=rot[p]+10;siz[p]=siz[p]+5;mov[p]=mov[p]+5;}
else if(mov1>490){mov[p]=0;rot[p]=0;siz[p]=0;}
}

