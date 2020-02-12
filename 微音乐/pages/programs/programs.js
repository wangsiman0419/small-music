const http=require('../../models/http')
const audio= wx.getBackgroundAudioManager();
Page({
  data: {
     programs:[],
     prevId:"",
     isPlay:false,
  },

  onLoad:async function (options) {
    var comment=await http.RecommentDj();
    var programs=comment.data.programs;
    this.setData({
      programs
    })
  },
  handlePlay(e){
     var {id,name}=e.currentTarget.dataset;
     http.DjPlay(id).then(res=>{
       var url=res.data.data[0].url;
       if(id!==this.data.prevId){
         audio.title=name;
         audio.src=url;
         this.setData({
           isPlay:true,
           prevId:id
         })
       }else{
         if(this.data.isPlay){
           audio.pause();
           this.setData({
             isPlay:false
           })
         }else{
           audio.title=name;
           audio.src=url;
           this.setData({
            url,
          })
         }
       } 
     })
  }

})