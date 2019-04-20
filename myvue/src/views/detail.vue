<template>
    <div>
        详情页面<br>
        <router-link to="/detail/comment">评价</router-link> |
        <router-link to="/detail/arg">参数</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>