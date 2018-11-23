    function shift (n) {
        var arr = arguments[0];
        var len = arguments[0].length;
        if(len == 1) {
        	n.length = 0;
        	return undefined;
        } else {
        	for(var i = 1; i<len; i++) {
        		n[i-1] = arr[i];
         	}
         	n.length = len-1;
        	return arr[0];
        }
    }