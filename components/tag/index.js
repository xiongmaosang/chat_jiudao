Component({
  options: {
    multipleSlots: true
  },
  
  externalClasses:['tag-class'], // 接收传过来的CSS  tag-class 名字随意

  properties: {
    text: String,
    num: Number,
  },


  data: {

  },

  methods: {
    onTap(e){
      this.triggerEvent('tapping',{
        text:this.properties.text
      })
    }
  }
})