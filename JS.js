	var tip = document.getElementsByClassName("tip")[0];
	var tips = document.getElementsByClassName("tips")[0];
	var box = document.getElementsByClassName("box")[0];
	var img = document.getElementsByClassName("b");
	var slide = document.getElementsByClassName("slide")[0];
	var left = document.getElementsByClassName("left")[0];
	var right = document.getElementsByClassName("right")[0];
	var page = document.getElementById("pages").children;
	setInterval(function(){
        tips.style.left = (tips.offsetLeft - 1) + "px";
        while(tips.offsetLeft < -(tips.offsetWidth)){
        	tips.style.left = tip.offsetWidth + "px";
        }
    },30);
	box.style.left=0+"px";
	img[0].style.left=-1200+"px";
	img[1].style.left=0+"px";
	img[2].style.left=1200+"px";
	img[3].style.left=2400+"px";
	img[4].style.left=3600+"px";
	img[5].style.left=4800+"px";
	img[6].style.left=6000+"px";
	var index=0;
	var isMoving=false;
	var next = function(){
		index++;
		animate(box,{left:-1200*index},function(){
			if (index>4){
				box.style.left="0px";
				index=0;
			}
		});
		pageChange();
	}
	var timer = setInterval(next,3000);
	slide.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(timer);
	}
	slide.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer = setInterval(next,3000);
	}
	left.onclick = function(){
		if(!isMoving){
			index--;
			isMoving=true;
			pageChange();
			animate(box,{left:-1200*index},function(){
				if(index<0){
					box.style.left="-4800px";
					index=4;
				}
				isMoving=false;
			});
		}
	}
	right.onclick = function(){
		if(!isMoving){
			index++;
			isMoving=true;
			pageChange();
			animate(box,{left:-1200*index},function(){
				if(index>4){
					box.style.left="0px";
					index=0;
				}
				isMoving=false;
			});
		}
	}
	for (var i=0;i<page.length;i++){
		page[i].onclick = function(){
			for (var j=0;j<page.length;j++) {
				this.parentElement.children[j].className = "page";
			}
			this.className = "page1";
			index=this.innerHTML-1;
			animate(box,{left:-1200*index});
		}
	}
	var pageChange = function(){
		for (var k=0;k<page.length;k++){
			page[k].className = "page";
		}if (index>4){
			page[0].className = "page1";
		}else if (index<0){
			page[4].className = "page1";
		}
		else{
			page[index].className = "page1";
		}
	}