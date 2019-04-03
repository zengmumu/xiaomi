<template>
  <div id="app">
    
      <router-view/>
    
    
    <div class="tabs row tac">
      <router-link  class="col"  to="/home">首页</router-link>
      <router-link  class="col" to="/home">分类</router-link>
      <router-link  class="col" to="/about">购物车</router-link>
      <router-link  class="col" to="/about">我 的</router-link>

    </div>
  </div>
</template>

<style lang="less">
/************* 变量 **/
// 主要颜色
@primary:#ff6700;

// 文字颜色
@tcolor:#999999;

// 背景颜色
@bg-color:#f2f2f2;


// 文字大小
@f-size:13px;

/*********** body***********/
body{
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: @f-size;
  background-color: #fff;
  color:@tcolor;
}
/*********** 栅格系统***********/
.row{ display: flex; width:100%; padding: 8px;}
.row-center{ align-items: center;}
.row-right{ align-items: flex-end}
.row-left{ align-items: flex-start}
.col{ flex:1;}
.col-top{ align-self: flex-end}
.col-center{ align-self: center}
.col-bottom{ align-self: flex-end}
.col-10{ flex:0 0 10%;}
.col-20{ flex:0 0 20%;}
.col-30{ flex:0 0 30%;}
.col-40{ flex:0 0 40%;}
.col-50{ flex:0 0 50%;}
.col-60{ flex:0 0 60%;}
.col-70{ flex:0 0 70%;}
.col-80{ flex:0 0 80%;}
.col-90{ flex:0 0 90%;}
.col-33{ flex:0 0 33.3%}
.col-66{ flex:0 0 66.7%}
.col-25{ flex:0 0 25%;}
/*********** 定位系统***********/
.pr{ position: relative;}
.pa{ position: absolute;}
.pf{ position: fixed;}
.full{ .pa;
      left:0;
      top:0;
      right:0;
      bottom:0;
      }
/*********** 模  块 ***********/  
.tabs{ 
  .pf;
  height:49px;
  bottom:0;
  background-color: #fff;
  }
.content{
  .full;
  background-color: @bg-color;
}

.has-tabs{
  bottom: 49px;
 
}
.has-header{
  top: 44px;
}
.has-sub{
 top: 88px;
}

.bar-header{
  .pf;
  height: 44px;
 
  top:0;
  left:0;
  z-index: 100;
}
.sub-header{
  .bar-header;
  top:44px;

}
/*********** 文字对齐 ***********/  
.tac{ text-align: center;}
.tar{ text-align: right;}
/*********** 默认控件 ***********/  
input[type=text]{
  border:none;
  display: block;
  width: 100%;
  line-height: 28px;
}
</style>
