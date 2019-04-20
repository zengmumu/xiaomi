// pages/content/content.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html:''
  },
  getContent(id){
    var that = this;
    wx.request({
      url: 'https://biger.applinzi.com/duan/content.php?id='+id,
      success:function(xhr){
        console.log(xhr.data);
        that.setData({html:xhr.data})
        WxParse.wxParse('article', 'html', xhr.data, that, 5);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  设置标题 为传递过来的参数 并且截取13位
    wx.setNavigationBarTitle({
      title: options.title.substr(0,13),
    })
    this.getContent(options.docid)
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