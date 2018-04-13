<template>

	<div class='home'>
 	<mt-header fixed title="孕育宝典" ></mt-header>
		<div class='container'>

			<ul>
				<router-link tag='li' to='/list/yunqian'>
					<img src="../../assets/img/pic1.png" alt="">
				</router-link>

				<router-link tag='li' to='/list/yunzhong'>
					<img src="../../assets/img/pic2.png" alt="">
				</router-link>

				<router-link tag='li' to='/list/chanqian'>
					<img src="../../assets/img/pic3.png" alt="">
				</router-link>
				<router-link tag='li' to='/list/chanhou'>
					<img src="../../assets/img/pic4.png" alt="">
				</router-link>
				<router-link tag='li' to='/list/chengzhang'>
					<img src="../../assets/img/pic5.png" alt="">
				</router-link>
				<router-link tag='li' to='/list/fangzhi'>
					<img src="../../assets/img/pic6.png" alt="">
				</router-link>
				

			</ul>
		</div>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default {

	}
</script>
<style scope>
	.container {
		margin:60px 0;
		
	}
	
	.container ul li img {
		width: 80%;
		margin-top: 20px;
		margin-left: auto;
		margin-right: auto;
		display: block;
	}
	.home{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}
</style>