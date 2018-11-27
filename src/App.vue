<template>
  <div id="app">
  	<div id="head">
  			<heade-nav></heade-nav>
  	</div>
  	<div id="container">
  			 <router-view></router-view>
  	</div>
  </div>
</template>

<script>
	import Header from './components/Header'
export default {
  name: 'App',
  components:{
  	"headeNav":Header
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
#container
{
	width: 86%;
	margin: auto;
}
</style>
