//app.js
App({
  url: "http://132.232.159.2:8080",
  /**
  * 登录验证
  */
  userData:"",
  isLogin: function () {
    wx.getStorage({
      key: 'userData',
      success:function(e){
        getApp().userData = e.data
      },
      fail: function (e) {
        // console.log(e.data==null)
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }
    })
  },
})