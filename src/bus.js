// 组件间数据共享
import Vue  from 'vue';
var bus  = new Vue();
// 实例化一个共享bus
bus.isTabs = true;


export default bus;
//导出