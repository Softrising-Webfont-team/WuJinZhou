//获取相应的标签
var userValue = document.querySelector('#userValue'),
    emailValue = document.querySelector('#emailValue'),
    submit = document.querySelector('.submit'),
    change = document.querySelector('.change'),
    userReg = /^[a-zA-Z0-9_-]{4,16}$/,
    emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//提交功能
submit.onclick = function() {
	var user = userValue.value,
	    email = emailValue.value;
	    flag = true;
    //对提交的用户名和邮箱进行判断    
    if(!user) {
        alert('请输入您的用户名！');
        flag = false;
        return;
    }
    if(!email) {
    	alert('请输入您的邮箱！');
    	flag = false;
    	return;
    }
    //判断用户名是否输入正确
    if(userReg.test(user)) {
        alert('您输入的用户名格式正确！');
    } else {
        if (user.length>16||user.length<4) {
            alert('请输入4~16位的用户名！');
        }
        else {
            alert('用户名只能包含字母、数字、_或-');
        }
        return;
    }
    //判断邮箱是否输入正确
    if(emailReg.test(email)) {
    	alert('您输入的用户名格式正确！');
    } else {
    	alert('您输入的邮箱格式错误，请修改！');
    	flag = false;
    	return;
    }
    //如果所有输入无误，就向后台请求
    if(flag) {
    	ajax({
    		method:"GET",
    		url:"",
    		data:"",
    		ascync:"true",
    		success:function (data) {

    		},
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
			            data = JSON.parse(data);
			            alert(data);
			            break;
			    }
    		}
    	})
    }
}
//切换账户功能
change.onclick = function() {
	userValue.value = '';
	emailValue.value = '';
}
//导出私钥
var gainkey = document.querySelector('.gainKey');
gainkey.onclick = function() {
    alert(getCookie('a'));
}
