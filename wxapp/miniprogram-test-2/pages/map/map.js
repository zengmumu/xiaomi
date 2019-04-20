// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.min.js');
var wxMarkerData = [];
Page({
  data: {
    markers: [],  //地图上的标记
    latitude: '', // 经度
    longitude: '',//纬度
    placeData: {},// 获取的搜索像那些
    key:'',
    scale:12,
  },

  // 当标记被点击调用
  makertap: function (e) {
    var that = this;
    var id = e.markerId; //指定当前被点击的标记
    // 显示标记的信息
    that.showSearchInfo(wxMarkerData, id);
  },
  search(e){
    var that = this;
    that.data.BMap.search({
      "query": e.detail.value,
      fail: that.data.fail,
      success: that.data.success,     
    });
    that.setData({ key: '', placeData:{}})
  },
  sliderChange(e){
console.log(e)
  this.setData({scale:e.detail.value})
  },

// 加载的时候
  onLoad: function () {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'nb2i9F1MsDEhlrVCi3IqSgLenAB5zw7E'
    });
    that.setData({"BMap":BMap})
    // 加载失败
    var fail = function (data) {
      console.log(data)
    };
    // 加载成功
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      // 设置经纬度
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      // 设置纬度
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    that.setData({ "fail": fail,"success": success})
    // 默认发起POI检索请求 
    BMap.search({
      "query": '火锅',
      fail: fail,
      success: success,
      // // 此处需要在相应路径放置图片文件 
      // iconPath: '../../img/marker_red.png',
      // // 此处需要在相应路径放置图片文件 
      // iconTapPath: '../../img/marker_red.png'
    });
  },
  // 显示点击标记的信息
  showSearchInfo: function (data, i) {
    var that = this;
    that.setData({
      placeData: {
        title: '名称：' + data[i].title + '\n',
        address: '地址：' + data[i].address + '\n',
        telephone: '电话：' + data[i].telephone
      }
    });
  },
  
})