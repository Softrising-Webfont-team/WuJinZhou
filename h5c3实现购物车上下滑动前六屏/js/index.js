$(function(){
	$('#fullpage').fullpage({

		//配置参数
		//各个屏幕颜色
		sectionsColor:["#F9DD67FF",'#84A2D4FF','#EF674DFF','#FFEEDDFF','#D04759FF','#85D9EDFF','#84D9EDFF','#8AC060FF','#FFFFFFFF'],
		//内容是否垂直居中，默认是垂直居中
		verticalCentered:false,
		//右边指示器
		navigation:true,
		//监听进入某一屏的时候 回调函数
		afterLoad:function(link,index){
           //index 序号 从1开始，当前屏幕的序号
           $('.section').eq(index-1).addClass('now');
		},
		// 离开某一屏幕的时候触发
		onLeave:function(index,nextIndex,direction) {

            if(index == 2 && nextIndex == 3) {
           	    $('.section').eq(index-1).addClass('leaved');
            } else if(index == 3 && nextIndex == 4) {
                $('.section').eq(index-1).addClass('leaved');
            } else if(index == 4 && nextIndex == 5) {
                $('.section').eq(index-1).addClass('leaved');
            }
		},
		//最好在页面结构加载完成时渲染完毕
		afterRender:function() {
			//封装jquery没有的方法
			//点击更多，切换下一步
			$('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown();
			})
		},
		// 页面切换的时间,默认700毫秒
		scrollingSpeed:1000

	});
})