const http=require('../../models/http')
Page({
  data: {
    artists:[]
  },
  onLoad:async function (options) {
    var res=await http.HotSinger();
    var artists=res.data.artists
    this.setData({
      artists
    })
  },
  handleClick(event){
    var {id,name}=event.currentTarget.dataset;
    var pic=escape(event.currentTarget.dataset.pic)
    wx.navigateTo({
      url: `/pages/singerSongs/singerSongs?id=${id}&pic=${pic}&name=${name}`,
    });
  },
})