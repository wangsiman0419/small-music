// components/Mv/Mv.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     data:{
       type:Object
     },
     datas:{
       type:Object
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
       var id=this.properties.data.id;
       var name=this.properties.data.name;
       wx.navigateTo({
         url: `/pages/mv-detail/mv-detail?id=${id}&name=${name}`
       })
     }
  }
})
