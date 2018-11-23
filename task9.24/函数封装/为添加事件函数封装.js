//为任意元素.绑定任意的事件, 任意的元素,事件的类型,事件处理函数
function addEvent(element,type,fn) {
    //判断浏览器是否支持这个方法
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
