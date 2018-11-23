function concat() {
	var arr = [];
        for(var i = 0; i<arguments.length; i++) {
        	if(arguments[i] instanceof Array) {
        		    var n = arguments[i];
                	for(var j = 0; j<n.length; j++) {
                          arr.push(n[j]);
                    }
        	} else {
        		 arr.push(arguments[i]);
        	}
        	
        }
        return arr;
}