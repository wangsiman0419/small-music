// pages/my/my.js
var http=require('../../models/my')
Page({

  data: {
    imageURL:"/images/person.jpg",
    songs:[],
    isPlay:false,
    isActive:false
  },
  onLoad:async function (options) {
   var res=await http.getMusic();
   var songs=res.data;
   this.setData({
     songs
   })
  },
  handleImage(){
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        const src=res.temFilePaths[0]
        this.setData({
          imageURL:src
        })
      },    
    })
  },
  handleClick(e){
    var {id,name,author,poster}=e.currentTarget.dataset;
    wx.setStorageSync('poster', poster);
    console.log(id)
    wx.navigateTo({
      url: `/pages/music-play/music-play?id=${id}&name=${name}&author=${author}`
    })
    this.isPlay=!this.isPlay
  },
  handleList(){
    wx.navigateTo({
      url: '/pages/create-list/create-list',
     
    })
  },
  handleLists(){
    wx.navigateTo({
      url: '/pages/create-music/create-music',
    })
  }
})
