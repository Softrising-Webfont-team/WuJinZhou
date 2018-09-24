function reverse () {
        var arr = arguments[0];
        var len = arguments[0].length-1;
        for(var i = 0; i<arr.length; i++) {
        	arguments[0][i]=arr[len];
        	len--;
        }
    }