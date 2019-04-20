Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['学习小程序','学习vue','复习react'],
    current:'',
    
  },
  goNews(){
    wx.navigateTo({
      url: '/pages/news/news',
    })
  },
  goBack(){
    wx.navigateBack({
      delta: 2
    })
  },
   // 实现 input框值和current双向绑定
  inputHd(e){
    // 当表单发生改变时候更新current值
    this.setData({current:e.detail.value})
  },
  //  从前面添加一个项目
  addItem(){
    var olist = this.data.list;              //原来list值
    olist.unshift(this.data.current);        //从前面添加一个只为current 表单的值    
    this.setData({list:olist,current:''});  //重新更新list和current current清空
    this.saveItem(olist);
    

  },
  // 删除当前行
  deleteItem(e){
    var olist = this.data.list;
    // 通过data-index传值，可以通过e.target.dataset.index获取值
    olist.splice(e.target.dataset.index,1);
    this.saveItem(olist)
  },
  // 实现本地存储
  saveItem(data){
    wx.setStorage({
      key: 'list',
      data: data,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   wx.getStorage({
     key: 'list',
     success: function(res) {
      that.setData({list:res.data});
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