// pages/music-detail/music-detail.js
const http=require('../../models/http')
const audio=wx.getBackgroundAudioManager();
Page({
  data: {
    music:[],
    songs:[],
    data:[],
    isPlay:false
  },
  onLoad:async function (options) {
      var {id}=options;
      var res=await http.AlbumSong(id);
      var {album,songs}=res.data;
      var music=[];
      music.push(album)
      this.setData({
        music,
        songs
      })
  },
  handlePlay:async function(){
     var dish=await http.DjPlay(this.data.songs[0].id);
     console.log(this.data.songs[0].id)
     var data=dish.data.data;
     var name=this.data.music[0].name;
     var url=dish.data.data[0].url;
     audio.title=name;
     audio.src=url;
     this.setData({
       data,
       name, 
     })
     if(this.data.isPlay){
       this.setData({
         isPlay:false
       })
       audio.pause()
     }else{
       this.setData({
         isPlay:true
       })
       audio.play()
     }
  }
})