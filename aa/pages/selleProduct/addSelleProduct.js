// pages/selleProduct/addSelleProduct.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 商品的类型
    version: [],
    versionValue:""
  },
  /**
   * 增加产品型号
   */
  addVersion: function(e){
    this.data.version.push(e.detail.value)
    this.setData({
      version: this.data.version,
      versionValue: this.data.versionValue
    })
  },
  /**
   * 获取要上传的产品头像图片路径
   */
  seeHeadPhoto: function(){
    var that = this
    wx.chooseImage({
      count:1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function(res){
        console.log(res.tempFilePaths)
        console.log(res.tempFiles)
        that.setData({
          headPhoto: res.tempFilePaths
        })
      }
    })
  },
  /**
   * 获取要上传的产品详情图路径
   */
  seeDetailsPhoto: function () {
    var that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          detailsPhoto: res.tempFilePaths
        })
        console.log(res.tempFilePaths)
      }
    })
  },
  /**
   * 上传文件方法
   */
  uploadimg: function (tempFilePaths){
    console.log(tempFilePaths)
    for(var i in tempFilePaths){
      wx.uploadFile({
        url: 'http://192.168.0.195:8080/seller/upload',
        filePath: tempFilePaths[i],
        name: 'image'
        // formData: {
        //   sellerId: 1
        // }
      })
    }
  },
  /**
   * form提交
   */
  formSubmit: function(e){
    console.log(e.detail.value)
    // 如果input框里面的值不为空
    if (e.detail.value.title != "" && e.detail.value.num != "" && e.detail.value.price != "" && e.detail.value.groupPrice != ""){
      if (this.data.headPhoto.length != 0) {
        this.uploadimg(this.data.headPhoto)
      }
      if (this.data.detailsPhoto.length != 0) {
        this.uploadimg(this.data.detailsPhoto)
      }
      传数据给后台
      wx.request({
        url: 'http://192.168.0.195:8080',
        data: {
          title: e.detail.value.title,
          num: e.detail.value.num,
          price: e.detail.value.price,
          groupPrice: e.detail.value.groupPrice
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
})