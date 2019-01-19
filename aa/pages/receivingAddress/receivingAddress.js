// pages/receivingAddress/receivingAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 跳转添加地址页面
   */
  goSetAddress:function(){
    wx.navigateTo({
      url: '/pages/setAddress/setAddress',
    })
  }
})