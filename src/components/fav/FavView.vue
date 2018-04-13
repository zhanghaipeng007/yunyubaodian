<template>

	<div class="fav">

		<mt-header fixed title="收藏"></mt-header>

		<div class='fav-main'>收藏</div>

		<div class="main">
			<ul>
				<li v-for="item in arr">
					{{item}}
				</li>
			</ul>
		</div>
	</div>
</template>
<style type="text/css">
	.fav {
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		line-height: 30px;
		font-size: 2rem;
		text-align: center;
	}
	
	.main {
		margin-top: 40px;
	}
</style>
<script type="text/javascript">
	export default {
		data() {
			return {
				val: '',
				arr: []  
			}
		},
		mounted() {
			var ls = localStorage;
			var str = ''
			var val = ls.getItem("f")
			var arr = JSON.parse(val)
			arr.forEach(item => {
				str += 'a' + item
			});
			var brr = str.split('a')
			this.arr = brr

		}
	}
</script>