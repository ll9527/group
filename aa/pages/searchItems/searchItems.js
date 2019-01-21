// pages/searchItems/searchItems.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
      getApp().isLogin();
    console.log(e);
    sendData = {"cid": e.search};
    wx.request({
      url: 'http://localhost:8080/search?cid=11',
      // data: sendData,
      // method: "POST",
    })
  },

})