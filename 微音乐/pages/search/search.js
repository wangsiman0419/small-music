// pages/search/search.js
const http=require('../../models/http')
const app=getApp();
Page({
  data: {
     songs:[],
     keywords:'',
     hots:[],
     isFocus:true,
     id:"",
     isPlay:false,
     music:[],
  },
  onLoad:async function (options) {
     var result=await http.HotSearch();
     var hots=result.data.result.slice(0,6);
     this.setData({
       hots,
     })
  },
  onSearch:async function(e){
    var keywords=e.detail;
    this.setData({
      keywords,
    })
    var res=await http.Search(keywords);
    var songs=res.data.result.songs;
    var id=res.data.result.songs[0].id;
    var name=res.data.result.songs[0].name;
    this.setData({
      songs,
      id,
      name,
      isFocus:false
    })
  },
  handlePlay: function(e){
    console.log(e)
    var {id,name,author}=e.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/search-play/search-play?id='+id+'&name='+name+'&author='+author,
      })
  },
  onFocus(){
    this.setData({
      isFocus:false
    })
  },
  leaveFocus(){
    this.setData({
      isFocus:true
    })
  },
  handleClick(e){
     var {id,name,author}=e.currentTarget.dataset;
     wx.navigateTo({
      url: '/pages/search-play/search-play?id='+id+'&name='+name+'&author='+author,
    })
  }
})