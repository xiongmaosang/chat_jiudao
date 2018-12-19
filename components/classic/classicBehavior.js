// 定义共有的数据，相当于vuex
let classicBeh = Behavior({ 
    properties: {
        img: String,
        content: String
    },
    attached:function(){}, //Behavior可以理解成Component，用法一样,生命周期也能写
    data(){

    },
    methods:{

    }
})

export {classicBeh}


