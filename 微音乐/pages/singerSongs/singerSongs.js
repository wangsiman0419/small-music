// pages/singerSongs/singerSongs.js
const http=require('../../models/http')
Page({
  data: {
     songs:[],
     pic:'',
     name:''
  },
  onLoad:async function (options) {
    var {id,name}=options;
    var pic=unescape(options.pic);
    var res=await http.SingerSongs(id);
    var songs=res.data.songs;
    this.setData({
      songs,
      name,
      pic
    })
  },
  handlePlay(e){
    var {name,id,author,poster}=e.currentTarget.dataset;
    wx.setStorageSync('poster', poster);
    wx.navigateTo({
      url: `/pages/music-play/music-play?id=${id}&name=${name}&author=${author}`,
    })
  }
})