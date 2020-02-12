//index.js
//获取应用实例
Page({
  data: {
    logo:"",
    name:""
  },
  onLoad(){

    wx.getSetting({
      success: (res) => {   //必须要用箭头函数
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success:(res)=>{   
              var {nickName,avatarUrl}=res.userInfo;
              this.setData({
                logo:avatarUrl,
                name:nickName
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo(e){
    var {nickName,avatarUrl}=e.detail.userInfo;
    this.setData({
      logo:avatarUrl,
      name:nickName
    })
  },
  handleClick(){
    wx.navigateTo({
      url: '/pages/home/home',
    })
  }
})