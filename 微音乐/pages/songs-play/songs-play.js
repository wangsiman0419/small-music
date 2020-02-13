// pages/music-play/music-play.js
const http=require('../../models/http')
const audio=wx.getBackgroundAudioManager();
Page({
  data: {
     isPlay:false,
  },
  onLoad:async function (options) {
     var id=options.id;
     var name=options.name;
     var author=options.author;
     var res=await http.getPlay(id);
     var url=res.data.data[0].url;
     audio.title=name;
     audio.src=url;
     var poster=wx.getStorageSync('poster');
     audio.pic=poster;
     this.setData({
       name,
       poster,
       author
     })
     //获取缓存
     wx.setStorageSync('playState', true)
    audio.onPlay(()=>{
      this.setData({
        isPlay:true
      })
      wx.setStorageSync('playState', true)
    })
    audio.onPause(()=>{
      this.setData({
        isPlay:false
      })
      wx.setStorageSync('playState', false)
    })
  },
  handleClick(){
    if(this.data.isPlay){
      this.setData({
        isPlay:false
      })
      audio.pause()
      wx.setStorageSync('playState',false)
    }else{
      this.setData({
        isPlay:true
      })
      audio.play()
      wx.setStorageSync('playState',true)
    }
  }
})