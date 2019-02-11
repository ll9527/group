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
    var that = this;
    getApp().isLogin();
    console.log(e);
    var sendData = {"classid": e.search};
    console.log(sendData);
    // 根据cid获取商品list
    wx.request({
      url: getApp().url+'/product/selectLevel2P',
      data: sendData,
      // method: "POST",
      success:function(res){
        console.log(res)
        that.setData({
          productList: res.data,
          url: getApp().url+"/image/"
        })
      }
    })
  },

})