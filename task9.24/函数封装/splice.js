//删除方法
    function splice (arr,index1,index2) {
        var list = [];
        var list1 = [];
        var len = arr.length;
        var n = index2 - index1;
        var h = len - n;
        var k = 0;
        var l = 0; 
        for(var i = index1; i<index2; i++) {
            list.push(arr[i]);
        }
        for(var j = 0; j<len; j++) {
            if(arr[j] == list[k]) {
               k++;
            }else {
               list1[l] = arr[j];
               l++;
            }
        }
        for(var m = 0; m<h; m++) {
        	arr[m] = list1[m];
        }
        arr.length = h;
    }