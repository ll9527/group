// pages/myWallet/myWallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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