Page({
  data: {
    hasUserInfo:false,
    userInfo:''
  },

  onLoad: function (options) {
    wx.getUserInfo({
      success:res=>{
        this.userAuthorized()
      }
    })
  },

  userAuthorized(){
     wx.getSetting({  // wx.getSetting获取用户使用授权
       success:res=>{
         if(res.authSetting['scope.userInfo']){  //为true是授权
              wx.getUserInfo({  //wx.getUserInfo 获取用户信息
                success:res=>{
                  this.setData({
                    hasUserInfo:true, //用户授权了
                    // userInfo:res.data.userInfo
                  })
                }
              })
         }
       }
     })
  },

  getUser(e){
    console.log(e)
  },

  onGetUserInfo(e){
    console.log(e)
    this.setData({
      userInfo
    })

  },

  onJumpToAbout(e){
    wx.navigateTo({
      url:"/pages/about/about"
    })
  },

  onStudy(e){
    wx.navigateTo({
      url: '/pages/courses/courses'
    })
  },

  onReady: function () {},

  onShow: function () {},

  onHide: function () {},

  onUnload: function () {},

  onPullDownRefresh: function () {},

  onReachBottom: function () {},

  onShareAppMessage: function () {}
})




