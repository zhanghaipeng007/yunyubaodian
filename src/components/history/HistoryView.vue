<template>
	
	<div class="history">
	
		<mt-header fixed title="历史记录"></mt-header>

		<div class='fav-main'>
			历史记录
		</div>
		<div class="main">
			<ul>
				<li v-for="item in arr" @click>
					{{item}}
					
				</li>
			</ul>
		</div>
	</div>
</template>


<style type="text/css" scoped>
	.history{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.main{
		margin-top:  40px;
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
			var val = ls.getItem("h")
			var arr = JSON.parse(val)
			arr.forEach(item => {
				str += 'a' + item
			});
			var brr = str.split('a')
			this.arr = brr

		}
	}
</script>