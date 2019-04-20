// pages/joks/joks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    page:0
  },

  getJoks(){
   wx.showLoading({
      title: '正在加载中',
      mask: false,    
    })
    // that 存一个this
    var that = this;
    // 向后端接口请求数据
    wx.request({
      url: 'https://biger.applinzi.com/duan/jok.php?page='+that.data.page,
      success: function (xhr) {
        wx.hideLoading();
        wx.showToast({
          title: '已加载'+xhr.data.result.length+'条数据',
          icon: 'success',
          duration: 1500
        })
        console.log(xhr);
        // 当请求成功
        var olist = that.data.list; // 以前的list
        var opage = that.data.page+1;// 以前的page
        olist = xhr.data.result.concat(olist);
        //olist  = 获取到接口的数据.结合之前的数据（新请求的数据和原来的数据相加）
        that.setData({list:olist,page:opage})
        // 更新数据list 和page
        wx.stopPullDownRefresh();
        // 停止下拉刷新
        wx.setStorage({
          key: 'joks',
          data: olist,
        })
        wx.setStorage({
          key: 'page',
          data: opage,
        })
      
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 默认设置该页面导航栏的标题
    wx.setNavigationBarTitle({
      title: '爱笑话'
    })
    // 默认获取本地joks数据
    wx.getStorage({
      key: 'joks',
      success: function(res) {
       that.setData({list:res.data}) 
      },
    })
    // 默认获取本地 page数据
    wx.getStorage({
      key: 'page',
      success: function (res) {
        that.setData({ page: res.data })
        // 获取笑话
        that.getJoks();
      },
    })
   
   
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
    this.getJoks();
    // 下啦拉刷新时候获取joks
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