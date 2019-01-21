//app.js
App({
  /**
  * 登录验证
  */
  isLogin: function () {
    wx.getStorage({
      key: 'userData',
      fail: function (e) {
        // console.log(e.data==null)
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }
    })
  },
})