// components/List/List.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      data:{
        type:Object
      },
      index:{
        type:Number
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      var {id,name,author,img}=this.properties.data;
      wx.setStorageSync('poster', img);
      console.log(this.properties)
      wx.navigateTo({
        url: `/pages/music-play/music-play?id=${id}&name=${name}&author=${author}`
      })
    }
  }
})
