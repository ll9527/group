// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    url: getApp().url,
    imgUrls: [
      {
        link: '/pages/test/test',
        url: '/image/14.png'
      }, {
        link: '/pages/test/test',
        url: '/image/14.png'
      }, {
        link: '/pages/test/test',
        url: '/image/14.png'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 3000,  //间隔时间
    duration: 1000,  //滑动时间
    // 页面配置
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    navScrollLeft: 0,
    //置顶初始高度
    topNum : 0
  },
  /**
   * 加载后运行
   */
  onLoad : function(e){
    var that = this;
    // 获取系统信息     
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
        console.log(res.windowHeight);
      }
    });
    // 获得热门商品
    wx.request({
      url: getApp().url +'/product/selectHotP',
      success: function(res){
        console.log(res)
        that.setData({
          hotList: res.data
        })
      }
    })
    // 服饰商品
    wx.request({
      url: getApp().url + '/product/selectLevel1P',
      data:{
        classid: 1
      },
      success: function (res) {
        console.log(res)
        that.setData({
          clothesList: res.data
        })
      }
    })
    // 鞋包商品
    wx.request({
      url: getApp().url + '/product/selectLevel1P',
      data: {
        classid: 2
      },
      success: function (res) {
        console.log(res)
        that.setData({
          xieBaoList: res.data
        })
      }
    })
    // 电器商品
    wx.request({
      url: getApp().url + '/product/selectLevel1P',
      data: {
        classid: 3
      },
      success: function (res) {
        console.log(res)
        that.setData({
          dianQiList: res.data
        })
      }
    })
    // 零食商品
    wx.request({
      url: getApp().url + '/product/selectLevel1P',
      data: {
        classid: 4
      },
      success: function (res) {
        console.log(res)
        that.setData({
          linShiList: res.data
        })
      }
    })
    // 百货商品
    wx.request({
      url: getApp().url + '/product/selectLevel1P',
      data: {
        classid: 5
      },
      success: function (res) {
        console.log(res)
        that.setData({
          baiHuoList: res.data
        })
      }
    })
    // 数码商品
    wx.request({
      url: getApp().url + '/product/selectLevel1P',
      data: {
        classid: 6
      },
      success: function (res) {
        console.log(res)
        that.setData({
          shuMaList: res.data
        })
      }
    })
    
  },
  /** 
  * 滑动切换tab 
  */
  bindChange: function (e) {
    var cur = e.detail.current;
    var that = this;
    that.setData({
      currentTab: e.detail.current,
      navScrollLeft: (cur - 2) * 125
    });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    var that = this;
    this.setData({
      navScrollLeft: (cur - 2) * 125
    })
    if (this.data.currentTab === cur) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 跳转超市区事件
   */
  toSupermarket : function(){
    wx.navigateTo({
      url: "/pages/test/test"
    })
  },
  /**
   * 跳转品牌区事件
   */
  toBrand : function(){
    wx.navigateTo({
      url: "/pages/test/test"
    })
  },
  /**
   * 跳转详情页事件
   */
  goDetails : function(){
    wx.navigateTo({
      url: "/pages/test/test"
    })
  },
  /**
   * 跳转评论页事件
   */
  goComment : function(){
    wx.navigateTo({
      url: "/pages/test/test"
    })
  },
  /**
   * 跳到顶部
   */
  goTop : function(e){
    this.setData({
      topNum : 0
    })
  }
})