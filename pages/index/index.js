//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/index/xiangguabanner.jpg',
      '/images/index/yangjiaocuibanner.jpg',
      '/images/index/putaobanner.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    first: '/images/index/xianggua.jpg',
    sec: '/images/index/yangjiaomi.jpg',
    ad: '/images/index/putao.jpg',
    dataImg: [
      '/images/index/xianggua1.jpg',
      '/images/index/xianggua2.jpg',
      '/images/index/putao1.jpg',
      '/images/index/yangjiaomi1.jpg',
      '/images/index/yangjiaomi2.jpg',
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
