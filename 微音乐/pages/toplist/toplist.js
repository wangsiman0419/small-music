// pages/dj-more/dj-more.js
const http=require('../../models/http')
const audio= wx.getBackgroundAudioManager();
Page({
  data: {
     toplist:[],
     prevId:"",
     isPlay:false,
  },

  onLoad:async function (options) {
    var list=await http.ToplistDj();
    var toplist=list.data.toplist;
    this.setData({
      toplist
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