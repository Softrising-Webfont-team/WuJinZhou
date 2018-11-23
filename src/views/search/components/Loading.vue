<template>
	<div class="loading">
		<transition name="fade">
			<div class="box">
		    	<ul>
		    		<li class="one"></li>
		    		<li class="two"></li>
		    		<li class="three"></li>
		    	</ul>
		    </div>
		</transition>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style lang="less" scoped>
	* {
			padding: 0;
			margin: 0;
		}
		.box {
			
		}
		ul{
            list-style:none;
		}
		li {
			border-radius: 50%;
			width: 6px;
			height: 6px;
			background-color:#666;
			margin-right: 10px;
			float: left;
			animation: move 1.4s infinite ease-in-out;
			animation-fill-mode: both;
		}
		@keyframes move {
            0%,100%{
            	transform: scale(0);
            }
            40% {
            	transform: scale(1.2);
            }
		}
		.one {
            animation-delay: -0.32s;
		}
		.two {
            animation-delay: -0.16s;
		}
		.three {
            animation-delay:  0s;
		}
</style>