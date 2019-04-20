<template>
  <div id="app">
   <div class="nav">
    <router-link to="/home">首页</router-link> | 
    <router-link to="/about">关于</router-link> |
     <router-link to="/produce/1">产品1</router-link> |
    <router-link to="/produce/2">产品2</router-link> |
    <router-link to="/detail" >详情</router-link> |
    <router-link to="/login" >登录</router-link> | 
    <router-link to="/user" >用户</router-link> |
    </div> 
   
   
    <router-view></router-view>
  </div>
</template>

<style lang="less">


/*****变量 **/
// 主要颜色
@primary:#ff6700;

// 文字颜色
@tcolor:#999999;

// 背景颜色
@bg-color:#f2f2f2;


// 文字大小
@f-size:.13rem;
.fbig{
 font-size:.17rem;
}
.fsmall{
  font-size:.11rem;
}
.fxsmall{
  font-size:.08rem;
}

/*********** body***********/
body{
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: @f-size;
  background-color: #fff;
  color:@tcolor;
}
/*********** 栅格系统***********/
.row{ display: flex; width:100%; padding: 8px; box-sizing: border-box;}
.row-wrap{
  flex-wrap: wrap;
}
.row-center{ align-items: center;}
.row-right{ align-items: flex-end}
.row-left{ align-items: flex-start}
.col{ flex:1; }
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
.col-100{ flex:0 0 100%;}
.col-33{ flex:0 0 33.3%; max-width:33.3%}
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
  height:.49rem;
  bottom:0;
  background-color: #fff;
  box-shadow: 0 -5px 15px rgba(220,220,220,.3);
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
  .btn:nth-of-type(1){
    .pa;
    left:0;
    top:0;
    border:none;
  }
  .btn:nth-of-type(2){
    .pa;
    right:0;
    top:0;
     border:none;
  }
}
.sub-header{
  .bar-header;
  top:44px;

}
.btn{
  line-height: .44rem;  
 .plr16;
  border:1px solid #f2f2f2;
  border-radius: 0.06rem;
  .iblock;
}
.item{
  line-height: 0.44rem;
}
/*********** 文字对齐 ***********/  
.tac{ text-align: center;}
.tar{ text-align: right;}
.thidden{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*********** 默认控件 ***********/  
input[type=text]{
  border:none;
  display: block;
  width: 100%;
  line-height: 28px;
}
/*********** display ***********/  
.block{ display: block};
.iblock{ display: inline-block}
.nowrap{ white-space: nowrap;}
.ofhidden{ overflow: hidden;}
.ofhidden-x{ overflow-x:hidden;}
.ofvisible-x{ overflow-x:auto;}
.ofvisible-y{ overflow-y:auto;}
/*********** padding ***********/  
.plr{ padding-left: 8px; padding-right: 8px;}
.plr16{ padding-left: 16px; padding-right: 16px;}
.nopadding{ padding: 0;}
/***********border ***********/  
.bo{border:1px solid #f0f0f0;}
.bol{border-left:1px solid #f0f0f0;}
.bor{border-right:1px solid #f0f0f0;}
.bot{border-top:1px solid #f0f0f0;}
.bob{border-bottom:1px solid #f0f0f0;}
.bono{border:none;}
/***********background ***********/  
.bg{ background-color: #fff;}
.bg-gray{ background-color: @bg-color}
</style>

</style>
