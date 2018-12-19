// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,  // String,Object, Number,Array, null(标识任意类型)  type必填
      value:false,  // 默认值，选填
      observer:function(){}
    },
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      let like = this.properties.like;
      let count= this.properties.count;
      count= like?count-1:count+1;

      this.setData({
        count:count,
        like:!like
      })

      let behavior = this.properties.like ? 'like':'cancel'
      this.triggerEvent('likeEvent',{ behavior:behavior },{})  
      //参数一 事件名称 参数二 传递参数
      //参数三 三个值：bubbles是否冒泡  composed：事件是否可以穿越组件边界  capturePhase：事件是否拥有捕获阶段
      //参数三 非必填 类型都是Boolean值 默认值都是false
    }
  }
})
