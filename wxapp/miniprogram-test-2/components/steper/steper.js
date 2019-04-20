// components/steper/steper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:Number,
      value:1
    },
    max: {
      type: Number,
      value: 999
    },
    min: {
      type: Number,
      value: 1
    },
    step: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeInp(e){
      // onum = 原来的值+dataset规定的值（step默认是1或者-1）
      // data-step="{{step*-1}}" 
      var onum = this.data.num+e.target.dataset.step;
      //当值超过了最大 等于最大值
      if(onum>this.data.max){
        onum=this.data.max;
      }
      // 当值超过了最小 等于最小
      if(onum<this.data.min){
        onum = this.data.min;
      }
      // 更新num
      this.setData({num:onum})
      // 子组件向父组件发送事件 numevent  num值为onum ，
      this.triggerEvent('numevent', { num: onum })
    }
  }
})
