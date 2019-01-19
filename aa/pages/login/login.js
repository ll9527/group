// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 跳转注册页面
   */
  register: function(e){
    wx.navigateTo({
      url: '/pages/register/register'
    })
  },
  /**
   * 登录
   */
  login: function (e) {
    if (e.detail.value.phone != "" && e.detail.value.password !=""){
      wx.request({
        url: 'http://192.168.0.195:8080/user/login',
        data:{
          tel: e.detail.value.phone,
          password: e.detail.value.password
        },
        method:"POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded' 
        },
        success: function(e){
          // 登录失败
          // console.log(typeof e.data.info)
          if(e.data.info === -1){
            wx.showToast({
              title: '手机或密码错误',
              icon: 'loading',
              duration: 1000,
              mask: true
            })
          }else{
            // 登录成功，将数据放入缓存
            // console.log(e)
            // var userData = JSON.stringify(e.data)
            wx.setStorage({
              key: 'userData',
              data: e.data
            })
            // wx.getStorage({
            //   key: 'userData',
            //   success(res) {
            //     console.log(res.data)
            //     console.log(res.data.info)
            //   }
            // })
          }
        }
      })
    }else{
      wx.showToast({
        title: '输入框不能为空',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})