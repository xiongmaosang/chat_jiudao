import {ClassicModel} from '../../models/classic.js';
import {LikeModel} from '../../models/like.js'

//  request是实例方法，不能HTTP.request需要先实例化
let Classic = new ClassicModel()
let Like = new LikeModel()

Page({
  data: {
    classicData: '',
    latest: true,
    first: false,
    likeCount:0,
    likeStatus:false
  },

  onLike(e) {
    let behavior = e.detail.behavior;
    Like.like(behavior, this.data.classicData.data.id, this.data.classicData.data.type)
  },

  onNext(e) {
    let index = this.data.classicData.data.index;
    
    Classic.getNext(index,(res) => {  // 把回调函数当参数传到getLatest
      this._getLikeStatus(res.data.id,res.data.type)
      this.setData({
        classicData: res,  // data里面没有classicData，setData 相当于默认给添加进去了
        latest:Classic.isLatest(res.data.index), 
        first:Classic.isFirst(res.data.index) 
      })
      // console.log(this.data.latest)
      console.log(this.data.latest)
    })
  },

  onPrevious(e) {
    let index = this.data.classicData.data.index;
    
    Classic.getPrevious(index,(res) => {  // 把回调函数当参数传到getLatest
      this._getLikeStatus(res.data.id,res.data.type)
      this.setData({
        classicData: res,  // data里面没有classicData，setData 相当于默认给添加进去了
        latest:Classic.isLatest(res.data.index), 
        first:Classic.isFirst(res.data.index) 
      })
      // console.log(this.data.latest)
      console.log(this.data.latest)
    })
  },

  onLoad: function (options) {
    let latest = Classic.getLatest((res) => { // 把回调函数当参数传到getLatest

      this.setData({
        classicData: res, //data里面没有classicData，setData 相当于默认给添加进去了
        likeCount:res.data.fav_nums,
        likeStatus:res.data.like_status  
      })
    })
  },

  onShareAppMessage: function () {

  },

  _getLikeStatus:function(artID,category){
    Like.getClassicLikeStatus(artID,category,(res)=>{
      this.setData({
        likeCount:res.data.fav_nums,
        likeStatus:res.data.like_status 
      })
    })
  }
})