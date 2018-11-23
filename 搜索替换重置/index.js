window.onload=function()
{
  var pS = document.getElementsByTagName('p'),
      search = document.getElementsByClassName('search')[0],
      replace = document.getElementsByClassName('replace')[0],
      reset = document.getElementsByClassName('reset')[0],
      inputS = document.getElementsByTagName('input'),
      content = [];
  for(var i=0;i<pS.length;i++) {
       content[i] = pS[i].innerHTML;
  }
  //搜索功能
  search.onclick=function() {
      var firstValue = inputS[0].value;
      // console.log(!firstValue);
      if(!firstValue) {
        alert('请输入要搜索的内容!');
        return;
      }
      for(var i=0;i<pS.length;i++) {
        pS[i].innerHTML = pS[i].innerHTML.split(firstValue).join("<span>"+firstValue+"</span>");
      }
  }
  //替换功能
  replace.onclick=function() {
      var firstValue = inputS[0].value;
      var secondValue = inputS[1].value;
      if(!firstValue) {
        alert("请输入要替换的内容!");
        return;
      }
      for(var i = 0;i<pS.length;i++) {
        // console.log(pS[i].innerHTML);
        pS[i].innerHTML = pS[i].innerHTML.replace(new RegExp(firstValue,'g'),secondValue);
      }
  }
  //重置功能
  reset.onclick=function() {
      for(var i = 0;i < pS.length; i++) {
        pS[i].innerHTML = content[i];
      }
  }
}
