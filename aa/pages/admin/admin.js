
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '依依官方旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.2, checked: true, stock: 10, totalPrice: 118.2 },
      { name: '哈哈旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.9, checked: true, stock: 10, totalPrice: 118.9 },
      { name: '哈哈旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.9, checked: true, stock: 10, totalPrice: 118.9 },
      { name: '哈哈旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.9, checked: true, stock: 10, totalPrice: 118.9 },
      { name: '哈哈旗舰店', title: '新款 高腰毛呢格子百褶裙 ins超火的半身裙子冬裙', num: 1, price: 118.9, checked: true, stock: 10, totalPrice: 118.9 },
    ],
    pageTotalPrice: 0,
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    getApp().isLogin();
    this.allPrice();
    this.setData({
      pageTotalPrice: this.data.pageTotalPrice
    });
    // console.log(this.data.pageTotalPrice);
  },
  /**
   *  点击选中复选框
   */
  selectCheckbox: function (e) {
    // console.log(e);
    var index = e.currentTarget.dataset.index;
    var item = this.data.items[index];
    if (item.checked) {
      item.checked = false;
      this.data.pageTotalPrice -= item.totalPrice;
    } else {
      item.checked = true;
      this.data.pageTotalPrice += item.totalPrice;
    }
    this.setData({
      items: this.data.items,
      pageTotalPrice: Math.floor(this.data.pageTotalPrice * 10) / 10
    })
  },

  /**
   * 删除购物车item
   */
  del: function (e) {
    var items = this.data.items;
    var index = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        items.splice(i, 1);
        i--;
        // console.log(items[i]);
      }
    }
    this.allPrice();
    this.setData({
      items: this.data.items,
      pageTotalPrice: this.data.pageTotalPrice
    });
    // console.log(this.data.items);
  },
  /**
   * 提交表单
   */
  bindsubmit: function (e) {
    console.log(this.data.items);
  },
})