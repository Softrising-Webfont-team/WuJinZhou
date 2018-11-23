//轮播
var bannerPic = document.querySelector('.bannerPic');
var bannerList = document.querySelector('.bannerList');
var imgList = bannerList.querySelectorAll('li');
var bottomS = document.querySelector('.bottomS');
var spanS = bottomS.querySelectorAll('span');
var prev = document.querySelector('.arrowL');
var next = document.querySelector('.arrowR');
var timer;
var index = 1;
var len = 3;
var animated = false;
function animate(offset) {
    if(offset == 0) {
    	return;
    }

    animated = true;
    var speed = offset/(300/10);
    var left = parseInt(bannerList.style.left) + offset;
    // console.log(left);
    // console.log(speed);
    var go = function () {
    	if((speed>0&&parseInt(bannerList.style.left)<left)||(speed<0&&parseInt(bannerList.style.left)>left)) {
    		bannerList.style.left = parseInt(bannerList.style.left) + speed + 'px';
    		setTimeout(go, 20);
    	} else {
    		// console.log('ok');
    		bannerList.style.left = left + 'px';
    		if(left>-200) {
    			bannerList.style.left = -1200*len + 'px';
    		}
    		if(left<(-1200*len)){
    			bannerList.style.left = '-1200px';
    		}
    		animated = false;
    	}
    }
    go();
}
function showSpans () {
	for(var i = 0; i<3; i++) {
        if(spanS[i].className == 'active') {
        	spanS[i].className = '';
        }
	}
	spanS[index-1].className = 'active';
}
next.onclick = function () {
	if(animated) {
		return;
	}
	if(index == 3) {
		index = 1;
	} else {
		index += 1;
	}
	animate(-1200);
	showSpans();
	// console.log(123);
}
prev.onclick = function () {
	if(animated) {
		return;
	}
	if(index == 1) {
		index = 3;
	} else {
		index -= 1;
	}
	animate(1200);
	showSpans();
	// console.log(456);
}
function play () {
	timer = setInterval(function(){
        next.onclick();
	},3000)
}
play();
function stop () {
	clearInterval(timer);
}
for(var j=0; j<3; j++) {
    spanS[j].onclick = function () {
    	if(animated) {
    		return;
    	}
    	if(this.className == 'active') {
    		return;
    	}
    	var myIndex = parseInt(this.getAttribute('index'));
    	var offset = -1200*(myIndex - index);
    	animate(offset);
    	index = myIndex;
    	showSpans();
    } 
}
bannerPic.onmouseenter = stop;
bannerPic.onmouseleave = play;

//下拉菜单
var men = document.querySelector('.men');
var women = document.querySelector('.women');
var menList = document.querySelector('.menList');
var womenList = document.querySelector('.womenList');
var index = 1;
var index1 = 1;
men.onclick = function () {
    if(index%2 == 0) {
    	menList.style.maxHeight = '0px';
    }else {
    	menList.style.maxHeight = '500px';
    }
    index++;
}
women.onclick = function () {
    if(index1%2 == 0) {
    	womenList.style.maxHeight = '0px';
    }else {
    	womenList.style.maxHeight = '500px';
    }
    index1++;
}

//滚动条
var bar = document.querySelector('.bar');
var barColor = document.querySelector('.barColor');
var point = document.querySelector('.point');

point.onmousedown = function (e) {
	var beginX = e.clientX - point.offsetLeft;
	document.onmousemove = function (e) {
        var endX = e.clientX - beginX;
        if(endX < 0) {
        	endX = 0;
        } else if(endX>=bar.offsetWidth-point.offsetWidth) {
        	endX = bar.offsetWidth-point.offsetWidth;
        }
        point.style.left = endX + 'px';
        barColor.style.width = endX + 'px';
        return false;
	}
	document.onmouseup = function () {
		document.onmousemove = null;
	}
}

var bar1 = document.querySelector('.bar1');
var barColor1 = document.querySelector('.barColor1');
var point1 = document.querySelector('.point1');

point1.onmousedown = function (e) {
	var beginX = e.clientX - point1.offsetLeft;
	document.onmousemove = function (e) {
        var endX = e.clientX - beginX;
        if(endX < 0) {
        	endX = 0;
        } else if(endX>=bar1.offsetWidth-point1.offsetWidth) {
        	endX = bar1.offsetWidth-point1.offsetWidth;
        }
        point1.style.left = endX + 'px';
        barColor1.style.width = endX + 'px';
        return false;
	}
	document.onmouseup = function () {
		document.onmousemove = null;
	}
}