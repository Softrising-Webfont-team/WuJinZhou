//网页进入，就向后台发送请求
var txt = document.querySelector('.txt');
 ajax({ 
    //传输的方式
    method:'GET',
    //地址
    url:'user.json',
    //传输到后台的数据
    data:{},
    //同步还是异步
    async:true,
    dataType:'JSON',
    //接受成功的函数
    success:function(data) {
        var key = JSON.parse(data);
        txt.value= 'deuqwertyuidfgho';
        //并调用cookie函数
        setCookie('a','deuqwertyuidfgho',0);
    },
    // 接受失败的函数
    fail:function(data) {
        switch (data) {
            case 400:
                alert('服务器不理解请求的语法');
                break;
            case 403:
                alert("请求不允许！");
                break;
            case 404:
                alert('没有发现文件、查询或URl！');
                break;
            case 500:
                alert("服务器内部发生错误！");
            default:
                alert(data);
                break;
        }
    }
})
// tick点击
var ticks = document.querySelectorAll('.tick');
var main = document.querySelector('.main');
var mainP = main.querySelector('p');
var btn = document.querySelector('.btn');
var readTxt = document.querySelector('.readTxt');
var index1 = 1;
var index2 = 1;
ticks[0].onclick = function() {
    if(index1%2 != 0) {
     	this.style.backgroundImage = 'url(./images/tickPic.png)';
     	mainP.style.color = 'red';
    } else {
     	this.style.backgroundImage = 'none';
     	mainP.style.color = '#929292';
    }
    index1++;
}
ticks[1].onclick=function() {
	if(index2%2 != 0) {
     	this.style.backgroundImage = 'url(./images/tickPic.png)';
        btn.href='../page/yourKey.html';
        btn.style.backgroundColor = '#108ee9'; 
    } else {
     	this.style.backgroundImage = 'none';
     	btn.href='javascript:void(0);';
     	btn.style.backgroundColor = '#ccc';
    }
    index2++;
}
//点击复制到剪切板功能
var getTxtA=document.querySelector('.getTxtA');
getTxtA.onclick=function() {
    if (!document.execCommand) {
        alert('您的浏览器不支持该功能！');
        return;
    }
    txt.select();
    var result = document.execCommand('copy');
    console.log(result);
    if(result) {
        
        alert('复制成功！');
    } else {
        console.log('复制失败！');
    }
}