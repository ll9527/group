// pages/myWallet/myWallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e){
    getApp().isLogin();
  },
  /**
   * 提现功能
   */
  toCash: function(e){
    wx.navigateTo({
      url: '/pages/msg/msg_success'
    })
  }
})