const http=require('../../models/http')
Page({
  data: {
    active:0,
    currentTab:0
  },
  onLoad:function(){
    wx.showLoading({
      title:'玩命加载中'
    })
    http.getCat("华语").then(res=>{
      var {playlists}=res.data;
      this.setData({
        playlists
      })
      wx.hideLoading();
    }) 
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
    var num=e.target.id;
    switch(num){
      case id="0":{
        http.getCat("华语").then(res=>{
          var {playlists}=res.data;
          this.setData({
            playlists
          })
        })
      };break;
      case id="1":{
        http.getCat("欧美").then(res=>{
          var {playlists}=res.data;
          this.setData({
            playlists
          })
        })
      };break;
      case id="2":{
        http.getCat("日语").then(res=>{
          var {playlists}=res.data;
          this.setData({
            playlists
          })
        })
      };break;
      case id="3":{
        http.getCat("韩语").then(res=>{
          var {playlists}=res.data;
          this.setData({
            playlists
          })
        })
      };break;
      case id="4":{
        http.getCat("粤语").then(res=>{
          var {playlists}=res.data;
          this.setData({
            playlists
          })
        })
      };break;
    }
  },
 })
