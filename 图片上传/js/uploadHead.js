$(function () {
	if (typeof(FileReader) === 'undefined') {   //如果不支持FileReader
        alert("抱歉，你的浏览器不支持FileReader，请使用现代浏览器操作！");
        return;
    } else {
        uploaderChange();
        // deleteUploadImg();
    }
    //上传图片
    function uploaderChange () {
    	$('.uploadBtn').change(function() {
    		var file = this.files[0];
    		//判断文件是否为图片
    		 if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图像类型");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
            	//更换头像
            	$('.headContent > img').attr('src',e.target.result);
            	uploadSever(e.target.result);
            } 
    	})
    }
    //发送到服务器
    function uploadSever(res) {
    	var xhr = new XMLHttpRequest();
    	xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const result = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                // 上传成功
                

            } else {
                // 上传失败
            }
        }
        }
	    // xhr.open('POST', '/uploadUrl' , true);
	    // xhr.send(res);
    }
      
})