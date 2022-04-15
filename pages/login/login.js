Page({
  data: {
      tabCur: 0,
      account: {
          phone: '',
          password: ''
      },
      login: {
          phone: '',
          code: ''
      },
      isLoading: false,
      wxisLoading: false,
      check: false
  },
  tabNavChange(e) {
      this.setData({
          tabCur: e.detail.index
      })
  },
  checkChange(e) {
      this.setData({
          check: e.detail
      })
  },
  loginSubmit(){
    console.log('login');
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})