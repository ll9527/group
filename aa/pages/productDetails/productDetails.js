// pages/productDetails/productDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:[
      '绿野仙踪30p', '绿野仙踪 60p', '绿野仙踪90p', '午后光线 30p',
      '午后光线 60p', '午后光线 90p', '午后光线绿野仙踪 30p'
    ],
    // 点击收藏
    collection: false,
  },
  /**
   * 选择商品分类
   */
  radioChange:function(e){
    this.setData({
      radioId: e.detail.value
    });
  },
  /**
   * 点击收藏
   */
  onCollection: function(e){
    if (this.data.collection){
      this.data.collection=false;
      this.setData({
        collection: this.data.collection
      });
    }else {
      this.data.collection = true;
      this.setData({
        collection: this.data.collection
      });
    }
  },
  /**
   * 跳转开团页面
   */
  goGroup: function(e){
    wx.navigateTo({
      url: '/pages/goGroup/goGroup'
    })
  },
  /**
   * 跳转店铺首页
   */
  goStore: function(e){
    wx.navigateTo({
      url: '/pages/storeDetails/storeDetails'
    })
  }
})