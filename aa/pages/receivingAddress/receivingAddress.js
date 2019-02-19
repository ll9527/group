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
    var that = this
    getApp().isLogin();
    wx.getStorage({
      key: 'userData',
      success: function(res) {
        wx.request({
          url: getApp().url +'/user/selectWithAddress',
          data: {
            userid: res.data.userId
          },
          success: function(res){
            console.log(res)
            that.setData({
              user: res.data
            })
          }
        })
      },
      fail: function(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    })
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