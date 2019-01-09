Page({
  data: {
    current: 'tab1',
    tabs: [
      {
        key: 'tab1',
        title: '商品详情',
        content: '这里是商品详情',
      },
      {
        key: 'tab2',
        title: '产品参数',
        content: '这里是产品参数',
      },
      {
        key: 'tab3',
        title: '售后保障',
        content: '这里是售后保障',
      },
    ],
  },
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
  },
  onTabsChange(e) {
    console.log('onTabsChange', e)
    const { key } = e.detail
    const index = this.data.tabs.map((n) => n.key).indexOf(key)

    this.setData({
      key,
      index,
    })
  },
  onSwiperChange(e) {
    console.log('onSwiperChange', e)
    const { current: index, source } = e.detail
    const { key } = this.data.tabs[index]

    if (!!source) {
      this.setData({
        key,
        index,
      })
    }
  },
})