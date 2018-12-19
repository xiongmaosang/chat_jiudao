import { HTTP } from '../../utils/http.js'

// 定义共有的数据，相当于vuex
let paginationBev = Behavior({
  properties: {
   
  },
  data: {

    dataArray: [], //页面的所有数据
    total:0  // 总记录数
  },

  methods: {
    setMoreData: function(dataArray) {  
      // if (dataArray==false) {
      //   this.data.ending = true
      //   if(this.data.dataArray==false){
      //     this.setData({
      //       empty:true
      //     })
      //   }
      // }
      let temp =this.data.dataArray.concat(dataArray)
      // this.data.start += this.data.count  // 起始的记录数 
      this.setData({
        dataArray: temp
      })
      return true
    },

    hasMore:function(){  // 是否还有更多的数据需要加载
      if(this.data.dataArray.length>=this.data.total){
        return false
      }else{
        return true
      }
    },

    setTotal(total){
      this.data.total = total
    },

    getCurrentStart:function(){
      return this.data.start
    },


    initialize(){   // 初始化所有值
      this.data.dataArray = []
      this.data.total = 0 
    },

    // initPagination:function(){
    //   this.data.ending = false
    //   this.data.start = 0
    //   this.data.dataArray = []
    //   this.setData({
    //     dataArray:[]
    //   })
    // }
  }
})


export {
  paginationBev
}