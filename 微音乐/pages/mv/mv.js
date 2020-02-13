// pages/mv/mv.js
const http=require('../../models/http')
Page({
  data: {
    data:[],
    datas:[],
    rank:[]
  },
  onLoad: function (options) {
    wx.showLoading({
      title:'玩命加载中'
    })
    http.NewMv().then(res=>{
      var data=res.data.data;
      this.setData({
        data
      })
      wx.hideLoading()
    }),
    http.RcmdMv().then(res=>{
      var datas=res.data.data;
      this.setData({
        datas
      })
    }),
    http.RankMv().then(res=>{
      var rank=res.data.data;
      this.setData({
        rank
      })
    })
  },
})