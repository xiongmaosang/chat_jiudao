Component({
  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal) {
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index:val
        })
      }
    }
  },

  attached() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    
    this.setData({
      year:year,
      month:this.data.months[month]
    })
  },

  data: {
    year: 0,
    month: '',
    _index:'',
    months:[
      '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月',
      '十二月'
    ],
  },

  methods: {

  }
})