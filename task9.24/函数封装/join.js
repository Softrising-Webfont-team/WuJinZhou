function join () {
	var len = arguments[0];
	var list = '';
    for(var i = 0; i<len.length; i++) {
    	if(i == len.length-1) {
    		list += len[i];
    	} else {
    		list += len[i] + arguments[1];
    		
    	}
    }
    return list;
}