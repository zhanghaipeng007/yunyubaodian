<template>
	<div class="list">
		<mt-header :title="title">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>

		</mt-header>
		<ul>
			<li v-for='(item,index) in arr' @click="history">

				<router-link :to="{ 
					path: '/article', 
					params: { userId: 123 },
					query:{
						names:str,
						idx:index
					}
				}">
					<img :src="require('../../assets/img/tu/'+item.img)"> 
						{{item.title}}

				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	import '../../mock/mock';
//	import Vue from 'vue'
	export default {
		data() {
			return {
				arr: [],
				str: "",
				title: ""
			}
		},
		methods: {			
			history() {
				var ls = localStorage;
				var num = ''
				if(!ls.getItem('h')) {
					var arr = ls.setItem('h', "[]")
				}				
					var brr = ls.getItem('h')
					brr = JSON.parse(brr)  
					brr.push(this.title)					
					brr.forEach(item => {
						num += item
					});
					var jsondata = JSON.stringify(brr)
					ls.setItem("h", jsondata)
				}
			},
		mounted() {
			let id = this.$route.params.id;
			this.str = id;
			if(id === 'yunqian') {
				this.title = '孕前'
			} else if(id === 'yunzhong') {
				this.title = '孕中'
			} else if(id === 'chanqian') {
				this.title = '产后'
			} else if(id === 'chanhou') {
				this.title = '分娩'
			} else if(id === 'chengzhang') {
				this.title = '幼儿成长'
			} else {
				this.title = '幼儿防治'
			}
			this.$http({
					method: "get",
					url: '/arList'
				})
				.then(res => {
					this.arr = res.data[id]['fenlei'];
//					this.names = res.data[names]['fenlei'].title;
				})
		}
	}
</script>
<style scoped>
	ul li {
		font-size: 21px;
		padding: 10px;
		height: 6rem;
		line-height: 70px;
		background-color: #57C4EC;
		border-bottom: dotted 2px #fff;
	}	
	img {
		width: 20%;
		float: left;
	}
	.list{
		margin: 0 0 60px;
	}
</style>
