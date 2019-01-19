// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 用户注册
   */
  register: function(e){
    if (e.detail.value.password != e.detail.value.password2){
        wx.showToast({
          title: '密码不一致',
          icon: 'loading',
          duration: 1000,
          mask: true
        })
    }else{
      if (e.detail.value.username != "" && e.detail.value.phone != "" && e.detail.value.password != "") {
        wx.request({
          url: 'http://192.168.0.195:8080/user/registered',
          data: {
            username: e.detail.value.username,
            tel: e.detail.value.phone,
            password: e.detail.value.password
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
    }
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})