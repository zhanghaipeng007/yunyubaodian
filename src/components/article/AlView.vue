<template>

	<div class='ar'>
		<mt-header :title="names">

			<mt-button icon="back" slot="left" @click='returns'>返回</mt-button>
			<div class="aaa" slot="right">
				<img src="../../assets/img/scc.png" @click="fav" />
			</div>

		</mt-header>
		{{content}}

	</div>

</template>

<script>
	export default {
		data() {
			return {
				content: "",
				names: ""
			}
		},
		methods: {
			returns() {
				this.$router.history.go(-1);
			},
			fav() {

				var ls = localStorage;
				var num = ''
				if(!ls.getItem('f')) {
					var arr = ls.setItem('f', "[]")
				}
				
					var brr = ls.getItem('f')
					brr = JSON.parse(brr) 
					if(brr.includes(this.names) ){
						alert("已经收藏过了")
					} else {
						brr.push(this.names)
						alert("恭喜！收藏成功")
					}
//					brr.push(this.names)
					
					brr.forEach(item => {
						num += item
					});
					var jsondata = JSON.stringify(brr)
					ls.setItem("f", jsondata)
				}
			},
			mounted() {
				let names = this.$route.query.names;
				let idx = this.$route.query.idx;

				this.$http({
						method: "get",
						url: '/arList'
					})
					.then(res => {

						this.content = res.data[names]['fenlei'][idx].content
						this.names = res.data[names]['fenlei'][idx].title
						console.log(this.names)
					})

			}

		}
</script>
<style>
	.ar {
		font-size: 16px;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
</style>