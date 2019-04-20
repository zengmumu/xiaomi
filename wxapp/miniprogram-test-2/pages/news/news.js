// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules:[],//分类
    slides:[],//幻灯片
    current:0,
    scrollLeft:0,//滚动的值
    news:[],//新闻的列表数据
  },
  // 分类被点击了
  //1px =2rpx;
  catTapHd(e){
    this.setData({current:e.target.dataset.index});
    // console.log(e);
    // e.target.offsetLeft,元素距离左侧的位置
    // 187px是屏幕的一半
    // 43是一个分类的宽
    var left = (e.target.offsetLeft-187+43)+"px";
    this.setData({scrollLeft:left});
  },
  // 获取分类与幻灯片数据
  getCats(){
    var that = this;
    wx.request({
      url: 'https://biger.applinzi.com/duan/cats.php',
      success:function(xhr){
        // console.log(xhr.data);
        that.setData({modules:xhr.data.modules,slides:xhr.data.slides})
      }
    })
  },
  
  // 获取新闻列表数据
  getNews(){
    var that = this;
    wx.request({
      url: 'https://biger.applinzi.com/duan/list4.php',
      success:function(xhr){
        // 更新 news 新闻列表数据
        that.setData({news:xhr.data.result});
      }
    })
  },
  // 跳转到 内容页面并传递参数  title   & docid
  goContent(e){
    // 通过 在标签里面 data-item="{{item}}" 事件传递参数
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `/pages/content/content?title=${item.title}&docid=${item.docid}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置标题
    wx.setNavigationBarTitle({
      title: '新闻列表',
    })
    //  获取分类和幻灯片
    this.getCats();

    //  获取新闻列表数据
    this.getNews();
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