import {HTTP} from '../utils/http-promise'

export class keyWorldModel extends HTTP{
    key = 'q'
    maxLength = 10
    getHistory() {
        const words = wx.getStorageSync(this.key)
        if (!words) { //words是空的话返回数组
            return []
        } else {
            return words 
        }
    }

    getHot(){
        return this.request({
            url:'/book/hot_keyword'
        })
    }

    addToHistory(keyworld) {
        let words = this.getHistory()
        const has = words.includes(keyworld)
        if (!has) {     
            // 如果已经有了这个数据了就什么都不干
            // 优化 超过10条删除最后一条
            const length = words.length
            if(length>=this.maxLength){
                words.pop()
            }
            words.unshift(keyworld)
            wx.setStorageSync(this.key, words)
        }
    }
    search(){
            
    }
}