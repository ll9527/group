// pages/search/search.js
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    //历史记录的开关
    searchRecord: true,
    searchBorder: false,
    // showBady: true,
    // 滑动块的index
    current: 0,
    // 导航栏的index
    currentTab: 0,
    // 页面配置
    winWidth: 0,
    winHeight: 0,
    // scroll-into-view
    // listId: "",
    // scrollTop: 0
    // 显示收藏按钮
    showCollect: true,
  },
  //点击输入框触发的方法
  showInput: function () {
    this.setData({
      inputShowed: true,
      searchRecord: false,
      searchBorder: true,
      // showBady: false
    });
  },
  // 点击输入框 取消 触发的方法
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      searchRecord: true,
      searchBorder: false,
      // showBady: true
    });
  },
  // 点击输入框 清空 触发
  clearInput: function () {
    this.setData({
      inputVal: "",
      searchRecord: false
    });
  },
  // 输入框输入 触发
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value,
      searchRecord: true
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
   * 加载后运行
   */
  onLoad: function (e) {
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

  },
  // 点击收藏
  switchCollect:function(e){
    if(this.data.showCollect){ 
      this.setData({
        showCollect:false,
      })
    } else{
      this.setData({
        showCollect: true,
      })
    }
  },
  /** 
  * 滑动切换tab 
  */
  bindChange: function (e) {
    var cur = e.detail.current;
    var that = this;
    that.setData({
      // currentTab: e.detail.current,
      current: e.detail.current,
      navScrollLeft: (cur - 2) * 125
    });
  },
})