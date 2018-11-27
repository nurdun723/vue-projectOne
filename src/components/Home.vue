<template>
	<div id="head">
		<h1>home</h1>
		<button @click="goback" type="button" class="btn btn-success">Success</button>
	</div>
</template>

<script>
	export default
	{
		methods:{
			goback:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	#head{width: 1150px;margin: auto;}
</style>