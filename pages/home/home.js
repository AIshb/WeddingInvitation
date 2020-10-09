// pages/home/home.js

const innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoPlay: false,
    interval: 2600,
    duration: 1200,
    musicUrl: "http://music.163.com/song/media/outer/url?id=386181.mp3",
    // innerAudioContext: wx.createInnerAudioContext(),
    isPlayingMusic: true,
    // bgImg: "/images/bg.jpg",
    // bgImg: "http://qhm5qrxhf.hd-bkt.clouddn.com/bg.jpeg",
    bgImg: "https://wedding-pic.su.bcebos.com/bg.jpeg",
    inviteName: "石鸿斌&刘梦眙",
    inviteDateOne: "将于 2020年10月24日 举办婚礼",
    inviteDateTwo: "时间：17:30",
    inviteAddress: "地址：昆山皇冠国际会展酒店7楼3号厅"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    innerAudioContext.autoplay = this.data.autoPlay
    innerAudioContext.src = this.data.musicUrl
    innerAudioContext.play()
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

  },

  play: function(event) {
    if (this.data.isPlayingMusic) {
      innerAudioContext.pause()
      this.setData({
        isPlayingMusic: false
      })
    } else {
      innerAudioContext.play()
      this.setData({
        isPlayingMusic: true
      })
    }
  },

  btnAddress: function(event) {
    // let plugin = requirePlugin('routePlan')
    // let key = 'NMXBZ-4RQWU-ONDVL-22542-ZZ2TH-IFFZV'  //使用在腾讯位置服务申请的key
    // let referer = '石鸿斌和刘梦眙的婚礼邀请'   //调用插件的app的名称
    // let endPoint = JSON.stringify({  //终点
    //   'name': '昆山皇冠国际会展酒店',
    //   'latitude': 31.379537,
    //   'longitude': 120.926080
    // })
    // wx.navigateTo({
    //   url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    // })
  }
})