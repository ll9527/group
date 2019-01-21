// pages/setAddress/setAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '湛江市', '赤坎区']
  },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    getApp().isLogin();
  },
  /**
   * 取消返回
   */
  cancel:function(e){
    wx.navigateBack({
      delta: 2
    })
  },
  /**
   * 提交表单
   */
  submit: function(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/receivingAddress/receivingAddress'
    })
  },
  /**
   * 省市区
   */
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
})