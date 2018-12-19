// components/navi/index.js

Component({
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    LeftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    RightSrc: 'images/triangle@right.png'
  },

  methods: {
    onLeft(e){
      if(!this.properties.latest){
        this.triggerEvent('left',{},{})
      }
      
    },
    onRight(e){
      if(!this.properties.first){
        this.triggerEvent('right',{},{})
      }
    }
  }
})
