// pages/music-play/music-play.js
const http=require('../../models/cat')
const https=require('../../models/http')
const audio=wx.getBackgroundAudioManager();
Page({
  data: {
     lyric:"",
     isPlay:true,
  },
  onLoad:async function (options) {
     var id=options.id;
     var name=options.name;
     var author=options.author;
     var res=await http.getPlay(id);
     var url=res.data.data[0].url;
     audio.title=name;
     audio.src=url;
     this.setData({
       name,
       author
     })
     //歌词
     var play=await https.MusicPlay(id);
     var lyric=play.data.lyric;
     this.setData({
         lyric,
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