// pages/dish-more/dish-more.js
const http=require('../../models/http')
Page({

  data: {
     album:[]
  },
  onLoad:async function (options) {
    var album=await http.Album();
    var albums=album.data.albums
    this.setData({
      albums
    })
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/dish/dish?id='+id,
    });
  },
})