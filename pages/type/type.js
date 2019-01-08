// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeData: [
      '香瓜',
      '羊角脆',
      '葡萄'
    ],
    clickId: 0,
    right: '香瓜',
    ad: '/images/index/putao.jpg',
    dataShop: [
      '/images/type/xiang-data1.jpg',
      '/images/type/xiang-data2.jpg',
      '/images/type/xiang-data3.jpg',
      '/images/type/xiang-data4.jpg',
      '/images/type/xiang-data5.jpg',
      '/images/type/xiang-data6.jpg',
    ],
  },
  typeTab:function(res) {
    console.log(res)
    this.setData({
      clickId: res.currentTarget.id,
      right: this.data.dataShop[res.currentTarget.id]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})