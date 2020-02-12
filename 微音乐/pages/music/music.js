// pages/music/music.js
const http=require('../../models/http')
Page({
  data: {
     banners:[],
     indicatorDots:true,
     indicatorColor:"rgba(11,44,66,0.6)",
     active:"#c20c0c",
     autoplay:true,
     keywords:'',
     result:{},
     albums:[],
     djRadios:[],
     toplist:[],
     programs:[],
     artists:[],
     result:[],
     name:"",
  },

  onLoad:async function (options) {
    wx.showLoading({
      title:'玩命加载中'
    })
    http.bannerUrl().then(res=>{
      var banners=res.data.banners.slice(0,5);
      this.setData({
        banners,
       })
       wx.hideLoading();
    })
    var album=await http.Album();
    var albums=album.data.albums.slice(0,6)
    this.setData({
      albums
    })

    var hotdj=await http.HotDj();
    var djRadios=hotdj.data.djRadios.slice(0,3);
    this.setData({
      djRadios
    })

    var list=await http.ToplistDj();
    var toplist=list.data.toplist.slice(0,3);
    this.setData({
      toplist
    })

    var comment=await http.RecommentDj();
    var programs=comment.data.programs.slice(0,3);
    this.setData({
      programs
    })
   
     var singer=await http.HotSinger();
     var artists=singer.data.artists.slice(0,6);
     this.setData({
       artists
     })

     var rank=await http.Rank();
     var result=rank.data.result;
     this.setData({
       result,
     })
    
  },
   onClick(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
   },
   handleClick(event){
    var {id}=event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/dish/dish?id='+id,
    });
  },
  handleSongs(event){
    var {id,name}=event.currentTarget.dataset;
    var pic=escape(event.currentTarget.dataset.pic)
    wx.navigateTo({
      url: `/pages/singerSongs/singerSongs?id=${id}&name=${name}&pic=${pic}`,
    });
  },
  handlePlay(event){
    var {id,name,poster,author}=event.currentTarget.dataset;
    wx.setStorageSync('poster', poster);
    wx.navigateTo({
      url: `/pages/music-play/music-play?id=${id}&name=${name}&author=${author}`,
    })
  },
  handleSinger(){
    wx.navigateTo({
      url: '/pages/singerMore/singerMore',
    
    })
  },
  handleEnter(){
    wx.navigateTo({
      url: '/pages/djRadio/djRadio',
    })
  },
  handlePro(){
    wx.navigateTo({
      url: '/pages/programs/programs',
    })
  },
  handleList(){
    wx.navigateTo({
      url: '/pages/toplist/toplist',
    })
  },
  handleToggle(){
    wx.navigateTo({
      url: '/pages/dish-more/dish-more',
    })
  }
})