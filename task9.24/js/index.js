//获取相应的标签
var list = document.querySelector('.list '),
    spanS = document.querySelectorAll('span'),
    smallList = list.querySelectorAll('ul'),
    index1 = [0,0,0],
    index2 = 1,
    arr = [];
//span注册点击事件
for (var i = 0; i<spanS.length; i++) {
	(function(i) {
		spanS[i].onclick = function () {
		    if(index1[i] % 2 ==0) {
		    	smallList[i].style.maxHeight = '200px';
		    } else if (index1[i] % 2 != 0) {
		    	smallList[i].style.maxHeight = '0px';
		    }
		    index1[i]++;
		}
	}(i));
	
}
var nodeS = document.querySelector('.nodeS'),
    pageS = document.querySelector('.pageS');
// smallList注册点击事件 
for (var j = 0; j<smallList.length ; j++) {
	var smallLi = smallList[j].querySelectorAll('li');
	for(var i = 0; i<smallLi.length; i++) {
		smallLi[i].onclick = function () {
			//判断是否为第一个标签，为其删除点击事件
			if(index2 == 1) {
				//判断是否被添加
				if(this.className == 'on')
				{
					return;
				}
	            //创建span
	            var p =document.createElement('p');
	            var newSpan = document.createElement('span');
	            var newA = document.createElement('a');
	            newSpan.innerHTML = this.innerHTML;
	            p.appendChild(newSpan);
	            p.appendChild(newA);
	            var n = this.getAttribute('index');
	            newSpan.onclick = function () {
                    pageS.style.display = 'block';
                    pageS.innerHTML = '页面'+n;	            
                }
	            nodeS.appendChild(p);
	            this.className = 'on';
			} else {
				//判断是否被添加
				if(this.className == 'on')
				{
					return;
				}
	            //创建span
	            var p =document.createElement('p');
	            var newSpan = document.createElement('span');
	            var newA = document.createElement('a');
	            newSpan.innerHTML = this.innerHTML;
	            newA.innerHTML = 'x';
	            p.appendChild(newSpan);
	            p.appendChild(newA);
	            newA.onclick = function () {
	            	nodeS.removeChild(this.parentNode);
	            }
	            var n = this.getAttribute('index');
	            newSpan.onclick = function () {
                    pageS.style.display = 'block';
                    pageS.innerHTML = '页面'+n;	            
                }
	            nodeS.appendChild(p);
	            this.className = 'on';
			}
			index2++;
		}
	}
} 
