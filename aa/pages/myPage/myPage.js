// pages/myPage/myPage.js

var app = getApp();

Page({
  data:{

  },
  /**
   * 页面加载时触发
   */
  onLoad: function(e) {
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
    wx.getStorage({
      key: 'userData',
      success: function(res) {
        console.log(res)
        that.setData({
          userData: res.data
        })
      },
    })
  },
  signOut: function(res){
    wx.removeStorageSync("userData")
    wx.removeStorageSync("sellerId")
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 页面每次显示时触发
   */
  onShow: function(e){
    getApp().isLogin();
    var that = this;
    wx.getStorage({
      key: 'userData',
      success: function (e) {
        wx.request({
          url: getApp().url + '/user/selectMark',
          data: {
            userid: e.data.userId
          },
          success: function (res) {
            console.log(res.data)
            // if (res.data.mark) {
            //   that.setData({
            //     mark: res.data
            //   })
            // }
            that.setData({
              username: res.data.username,
              mark: res.data.mark
            })
          }
        })
        wx.request({
          url: getApp().url + '/user/selectScore',
          data: {
            userid: e.data.userId
          },
          success: function(res){
            that.setData({
              score: res.data
            })
          }
        })
      },
      fail: function(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    })   
  },
  // 升级店长
  toDianZhang: function(){
    // wx.navigateTo({
    //   url: '/pages/upgradeStoreManager/msg',
    // })
  },
  // 线下开店
  toKaiDian : function(){
    wx.navigateTo({
      url: '/pages/sellerManager/register',
    })
  },
  // 我的团购页面
  toTuangou : function(){
    // wx.navigateTo({
    //   url: '/pages/myGroup/myGroup',
    // })
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
    // wx.navigateTo({
    //   url: '/pages/order/order',
    // })
  },
  // 跳转订单待发货
  dFahuo: function () {
    // wx.navigateTo({
    //   url: '/pages/orderDelivery/orderDelivery',
    // })
  },
  // 跳转订单待收货
  dShouhuo: function () {
    // wx.navigateTo({
    //   url: '/pages/orderTakeDelivery/orderTakeDelivery',
    // })
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