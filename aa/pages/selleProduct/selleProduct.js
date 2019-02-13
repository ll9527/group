// pages/selleProduct/selleProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 下架商品
   */
  onDelete: function(e){
    console.log(e)
    // 获得商品id
    console.log(e.target.dataset.productid)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getApp().isLogin();
    //查询通过sellerid查已上架的商品
    wx.request({
      url: getApp().url+'/seller/selectFromSeller',
      data: {
        sellerid: wx.getStorageSync("sellerId")
      },
      success: function(res) {
        console.log(res.data)
      },
    })
  },

})