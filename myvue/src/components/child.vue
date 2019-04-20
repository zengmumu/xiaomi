<template>
	<div class="child">
		<h1>我是子组件</h1>
		{{msg}}
	</div>
</template>

<script>
	// 默认导出
	export default {
		name:"child",
		props:{msg:{type:String}}
	}
</script>

<style>
	
</style>