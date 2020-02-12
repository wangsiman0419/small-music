// pages/music-list/music-list.js
const http=require('../../models/http')
Page({
  data: {
       playlist:{},
       isPlay:false,
       playId:""
  },

  onLoad:async function (options) {
      var {id}=options;
      var res=await http.getList(id);
      var playlist=res.data.playlist;
      this.setData({
        playlist
      })
    },
    handlePlay(event){
      var {id,name,poster,author}=event.currentTarget.dataset;
      wx.setStorageSync('poster', poster);
      wx.navigateTo({
        url: `/pages/music-play/music-play?id=${id}&name=${name}&author=${author}`,
      })
    },
    onShow() {
      var playState = wx.getStorageSync('playState');
      var playId = wx.getStorageSync('playId')
      if(playState!=null){
        this.setData({
          isPlay:playState
        })
      }
      this.setData({
        playId
      })
    },

})