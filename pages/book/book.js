import { BookModel } from "../../models/book";

let BookM = new BookModel()

Page({
  data: {
    books: [],
    searching:false,
    more:''
  },
  
  onLoad: function (options) {
    const hotList = BookM.getHotList()
    hotList.then(res => {
      this.setData({
        books:res.data
      })
    })
  },

  onSearching(e){
    this.setData({
      searching:true
    })
  },

  onCancel(e){
    this.setData({
      searching:false
    })
  },

  onReachBottom(){
    this.setData({
      more:Math.random  //随机数保证每次值都不一样，都改变
    })
  }


 
})




