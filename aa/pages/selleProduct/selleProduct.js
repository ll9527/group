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
    e.target.dataset.productId
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})