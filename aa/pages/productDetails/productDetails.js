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
    count: 0,
    num: 20
  },
  /**
   * 点击右符号 增 数量
   */
  add: function (e) {
    if (this.data.count < this.data.num) {
      this.data.count += 1;
      this.setData({
        count: this.data.count
      })
    } else {
      // 如果件数大于库存数，则件数等于库存数
      this.data.count = this.data.num;
      this.setData({
        count: this.data.count
      })
    }
    
  },
  /**
   * 点击右符号 减 数量
   */
  reduce: function (e) {
    // 如果件数大于0，可以减件数
    if (this.data.count > 0) {
      this.data.count -= 1;
      this.setData({
        count: this.data.count
      })
    } else {
      // 件数小于0，件数等于0
      this.data.count = 0;
      this.setData({
        count: this.data.count
      })
    }
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(res){
    var that = this;
    getApp().isLogin();
    console.log(res)
    wx.request({
      url: getApp().url +'/product/selectDetail',
      data: {
        productid:res.productid
      },
      success: function(res) {
        // console.log(res)
        // that.setData({
        //   productDetail: res.data,
        //   num: res.data.num
        // })       
      }
    })
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