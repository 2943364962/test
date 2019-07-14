var currentImg=1;
var imgCount=4;
window.onload=function(){
	//手动点击上一张
	document.getElementById("left").addEventListener("click",function(){
		if(currentImg>1){
			currentImg--;
		}else if(currentImg==1){
			currentImg=imgCount;
		}
		handChangeImage();
	},"false");
	//手动点击下一张
	document.getElementById("right").addEventListener("click",function(){
		if(currentImg<4){
			currentImg++;
		}else if(currentImg==4){
			currentImg=1;
		}
		handChangeImage();
	},"false");
	//自动播放
	setTimeout(selfChangeImg,4000);
	
	var olObj=document.getElementsByClassName("behind")[0];
	
	for(var i=0;i<4;i++){
		var liObj=document.createElement("li");
		olObj.appendChild(liObj);
		liObj.setAttribute("index",i+1);
	}
	for(var i=0;i<4;i++){
		olObj.children[i].addEventListener("click",function(){
			var index=this.getAttribute("index");
			currentImg=index;
			handChangeImage();
		},"false");
	}
	
};
function handChangeImage(){
	document.getElementById("testImg").src="img/"+currentImg+".jpg";
};
function selfChangeImg(){
	if(currentImg<imgCount){
		currentImg++;
	}else{
		currentImg=1;
	}
	document.getElementById("testImg").src="img/"+currentImg+".jpg";
	setTimeout(selfChangeImg,4000);
};
