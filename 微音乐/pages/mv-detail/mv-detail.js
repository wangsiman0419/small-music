// pages/mv-detail/mv-detail.js
const http=require('../../models/http')
Page({
  data: {
     url:"",
     name:'',
     comments:[],
     mvs:[],
     x:true
  },
  onLoad:async function (options) {
      var {id}=options;
      var {name}=options;
      var res=await http.MvDetail(id)
      this.setData({
        url:res.data.data.url,
        name
      })
      var res=await http.CommentMv(id);
      var {comments}=res.data;
      this.setData({
        comments
      })
      var same=await http.MvSame(id);
      var {mvs}=same.data;
      this.setData({
        mvs
      })
  },
  async handleClick(e){
    var {id,name}=e.currentTarget.dataset
     var res=await http.MvDetail(id)
     this.setData({
       url:res.data.data.url,
       name
     })
  }
})