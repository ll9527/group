// pages/myPage/myPage.js

var app = getApp();

Page({
  data:{

  },
  /**
   * 页面加载时触发
   */
  onLoad(e) {
    var that = this;
    getApp().isLogin();
    // 获取系统信息     
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 升级店长
  toDianZhang: function(){
    wx.navigateTo({
      url: '/pages/upgradeStoreManager/msg',
    })
  },
  // 我要开店
  toKaiDian : function(){
    wx.navigateTo({
      url: '',
    })
  },
  // 我的团购页面
  toTuangou : function(){
    wx.navigateTo({
      url: '/pages/myGroup/myGroup',
    })
  },
  // 去业绩积分
  toYeji: function () {
    wx.navigateTo({
      url: '',
    })
  },
  // 跳转查看全部订单页面
  selectAllList : function(){
    wx.navigateTo({
      url: '',
    })
  },
  // 跳转订单待发货
  dFukuan : function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  // 跳转订单待发货
  dFahuo: function () {
    wx.navigateTo({
      url: '/pages/orderDelivery/orderDelivery',
    })
  },
  // 跳转订单待收货
  dShouhuo: function () {
    wx.navigateTo({
      url: '/pages/orderTakeDelivery/orderTakeDelivery',
    })
  },
  // 跳转订单待评价
  dPingjia: function () {
    wx.navigateTo({
      url: '',
    })
  },
  // 跳转售后页面
  shouHou: function () {
    wx.navigateTo({
      url: '/pages/myAfterSale/myAfterSale',
    })
  },
})