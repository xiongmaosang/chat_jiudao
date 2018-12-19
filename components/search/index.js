import {
  keyWorldModel
} from '../../models/searchModule'
import {
  BookModel
} from '../../models/book'

// import { paginationBev } from '../behaviors/pagination' 

const keyworldmodel = new keyWorldModel()
const bookModel = new BookModel()

Component({
  // behaviors:['paginationBev'],
  properties: {
    more: {
      type: String,
      observer: '_load_more' //observer监听到属性的值有改变的时候会执行自定义函数_load_more 
    }
  },

  data: {
    historyKeys: [],
    hotWords: [],
    dataArray: [],
    loading:false,
    loadingCenter:false
  },

  attached() {
    const historyKeys = keyworldmodel.getHistory()
    const hotWords = keyworldmodel.getHot()
    this.setData({
      historyKeys
    })

    hotWords.then(res => {
      this.setData({
        hotWords: res.data.hot
      })
    })
  },

  methods: {
    _load_more() {
      const length = this.data.dataArray.length //已经取回了多少条数据

      if(this.data.loading){
        return //锁  防止过快发生两次请求
      }

      this.data.loading = true 

      bookModel.search(length).then(res=>{  // 加载下一页数据  
        const tempArray = this.data.dataArray.concat(res.data.book)
        
        this.setData({
          dataArray:tempArray,
          loading :false 
        })
      }) 
    },

    onCancel(e) {
      this.triggerEvent('cancel', {}, {})
    },
    onConfirm(e) {
      this.setData({
        searching: true,
        loadingCenter:true
      })

      const word = e.detail.value
      keyworldmodel.addToHistory(word)

      bookModel.search(0, word).then(res => {
        this.setData({
          dataArray: res.data.books
        })
      })
    },
    onDelete(e) {
      this.setData({
        searching: false
      })
    }

  }
})