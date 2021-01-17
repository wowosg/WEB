
function genstory(number){
	if(number==1){
		document.getElementById("Introduction").innerHTML = "天天鮮排骨飯<img  src='img/天天鮮.jpg' height='150px'></br>";
	}
	if(number==2){
		document.getElementById("Introduction").innerHTML = "第34夜-Night34th<img  src='img/no34.jpg' height='150px' ></br>";
	}
    if(number==3){
        document.getElementById("Introduction").innerHTML = "神樂岡旭川拉麵<img  src='img/神樂岡旭川拉麵.jpg' height='150px' ></br>";
	}
	if(number==4){
        document.getElementById("Introduction").innerHTML = "天一香 肉羹順<img  src='img/天一香.jpg' height='150px' ></br>";
	}
    if(number==5){
        document.getElementById("Introduction").innerHTML = "海勒牛排館<img  src='img/海勒牛排館.jpg' height='150px' ></br>";
	}
	if(number==6){
        document.getElementById("Introduction").innerHTML = "朱添鮮魚號<img  src='img/朱添鮮魚號.jpg' height='150px' ></br>";
	}
    if(number==7){
        document.getElementById("Introduction").innerHTML = "HR ROASTERS<img  src='img/homerun roasters.jpg' height='150px' ></br>";
	}
	if(number==8){
        document.getElementById("Introduction").innerHTML = "廖媽媽珍奶<img  src='img/廖媽媽珍珠奶茶專賣鋪.jpg' height='150px' ></br>";
	}
    if(number==9){
        document.getElementById("Introduction").innerHTML = "Marlon<img  src='img/marlon.jpg' height='150px' ></br>";
	}
	if(number==10){
        document.getElementById("Introduction").innerHTML = "雅廬<img  src='img/雅廬.jpg' height='150px' ></br>";
	}
    if(number==11){
        document.getElementById("Introduction").innerHTML = "俞家清魚湯<img  src='img/俞家清魚湯.jpg' height='150px' ></br>";
	}    
}
function clean(){
	document.getElementById("Introduction").innerHTML = "Choose<img  src='img/pin.png' height='150px' ></br>";
}

var playflag=0;
function switchBGM(){
	var x = document.getElementById("myAudio"); 
	x.loop=true; 			//循環播放
	if(playflag==0){
		x.play();
		playflag=1;
	}
	else{
		x.pause();
		playflag=0;
	}
}

window.addEventListener( "load", loadSearches, false );