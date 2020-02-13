// pages/create-list/create-list.js
const http=require('../../models/my')
Page({
  data: {
   songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
     var res=await http.getCreate();
     var songs=res.data;
     this.setData({
       songs
     })
  },
})