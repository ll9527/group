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
          url: 'http://192.168.0.120:8080/user/registered',
          data: {
            username: e.detail.value.username,
            tel: e.detail.value.phone,
            password: e.detail.value.password
          },
          success: function (e) {
            // info 1 成功  -1 注册失败  -2 手机已存在
            if (e.data.info === 1) {
              wx.showToast({
                title: '注册成功',
                icon: 'loading',
                duration: 1000,
                mask: true,
                success: function(e){
                  wx.navigateBack({
                    delta: 1
                  })
                }
              })
            }
            else if (e.data.info === -2){
              wx.showToast({
                title: '手机已存在',
                icon: 'loading',
                duration: 1000,
                mask: true
              })
            } else {
              console.log(e)
              wx.showToast({
                title: '无法连接服务器',
                icon: 'loading',
                duration: 1000,
                mask: true
              })
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
    }
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})