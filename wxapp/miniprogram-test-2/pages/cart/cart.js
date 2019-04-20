// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      { title: "萝卜", price: 1.3, num: 1 },
      { title: "菠萝", price: 3, num: 2 },
      { title: "苹果", price: 4, num: 4 },
      { title: "草莓", price: 11, num: 2 },
    
      ]
  },
  numChange(e){
    // e.detail.num
    console.log(e);
    var ogoods = this.data.goods;
    // 设置以前ogoods里面的dataset.index个num值为 子元素发送的事件数据
    ogoods[e.target.dataset.index].num = e.detail.num;
    this.setData({goods:ogoods});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})