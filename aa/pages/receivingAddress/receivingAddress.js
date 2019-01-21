// pages/receivingAddress/receivingAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad() {
    getApp().isLogin();
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