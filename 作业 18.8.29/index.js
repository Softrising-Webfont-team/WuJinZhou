var box=document.querySelector('.box');
//正文调用
Ajax({
    	url:'https://v1.hitokoto.cn/',
    	method:'GET',
    	async:true,
    	data:{
    		c:'e',
    		charset:'utf-8'
    	},
    	success:function(data) {
            var txt = JSON.parse(data);
            //接收正文
            box.innerHTML = `<span class="txt">${txt.hitokoto}</span>
                             <span class="from">${txt.from}</span>
                             <span class="time">${changeTime(txt.created_at)}</span> `;
            addAnimation();
    	},
    	error:function(data) {
            console.log(data);
    	}
    })   
setInterval(function() {
	 Ajax({
    	url:'https://v1.hitokoto.cn/',
    	method:'GET',
    	async:true,
    	data:{
    		c:'e',
    		charset:'utf-8'
    	},
    	success:function(data) {
            var txt = JSON.parse(data);
            //接收正文
            box.innerHTML = `<span class="txt">${txt.hitokoto}</span>
                            <span class="from">${txt.from}</span>
                            <span class="time">${changeTime(txt.created_at)}</span> `;
            addAnimation();

    	},
    	error:function(data) {
            console.log(data);
    	}
    })

},10000)
//音乐调用
var myAudio = document.querySelector('audio');
//歌曲id
var arr = ['400162138','17706562','32835004','17258493','466122659'];
var songUrl = [];
var sourceS = document.querySelectorAll('source');
for(var i = 0; i<arr.length; i++) {
    Ajax({
        url:'https://v1.hitokoto.cn/nm/url/400162138',
        method:'GET',
        async:true,
        success:function(data) {
            var content = JSON.parse(data);
            myAudio.src = content.data[0].url;
            // songUrl.push(content.data[0].url);
        }
    })
}

//实现多首音乐播放


function Ajax(obj) {
    var url = obj.url||'',
        method = obj.method||'GET',
        async = obj.async?true:false,
        data = '',
        suc = obj.success,
        error = obj.error;
        if(obj.data) {
        	var arr=[];
        	for(var item in obj.data) {
        		arr.push(item+'='+obj.data[item])
        	}
        	data=arr.join('&');
        }
        if(data&&method == 'GET') {
        	url+='?'+data;
        }
        if(window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else {
        	var xhr = new ActiveXObject('Mcrosoft.XMLHTTP');
        }
        if(method == 'GET') {
        	xhr.open(method,url,async);
        	xhr.send(null);
        }
        if(method == 'POST') {
        	xhr.open(method,url,async);
        	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	    xhr.send(data);
        }
        xhr.onreadystatechange=function() {
            if(xhr.readyState == 4) {
            	if(xhr.status == 200) {
                    if(suc) {
                    	suc&&suc(xhr.responseText);
                    }
            	} else {
                    if(error) {
                    	error&&error(xhr.status);
                    }
            	}
            }
        }
}
function addAnimation() {
    var txt = document.querySelector('.txt'),
        time = document.querySelector('.time');
        creater = document.querySelector('.from')
    txt.className = 'txt animated';
    time.className = 'time animated';
    creater.className = 'from animated';
}
function changeTime (data) {
    var date = new Date(data*1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y+'.'+m+'.'+d;
}