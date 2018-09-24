	function popArr (arr) {
        var m = null;
        var list = [];
        //数组的长度
        var Length = arr.length;
        //得到数组的最后一个值
        m = arr[Length-1];
        for(var i = 0; i<arr.length-1; i++) {
            list.push(arr[i]);
        }
        return list;
	}
    function getPop (arr) {
    	var m = null;
        var list = [];
        //数组的长度
        var Length = arr.length;
        //得到数组的最后一个值
        m = arr[Length-1];
        for(var i = 0; i<arr.length-1; i++) {
            list.push(arr[i]);
        }
        return m;
    }
