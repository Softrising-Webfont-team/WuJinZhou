  function push () {
    	var arr = arguments[0];
    	var len = arr.length;
        for(var i = 1; i<arguments.length; i++) {
            arr[len] = arguments[i];
            len++;
        }
        return arr;
    }