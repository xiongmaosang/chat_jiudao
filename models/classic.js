import {
    HTTP
} from '../utils/http.js'


export class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallback(res) // 把数据当做参数  传给回调函数
                wx.setStorageSync('latest', res.data.index) //同步写入缓存
            }
        })
    }

    getPrevious(index, sCallback) {
        let key = this._getkey(index - 1)
        let classic = wx.getStorageSync(key)
        if (!classic) {
            this.request({
                url: 'classic/' + index + '/previous',
                success: (res) => {
                    wx.setStorageSync(this._getkey(res.data.index),res) 
                    sCallback(res) // 把数据当做参数  传给回调函数
                }
            })
        }else{
            sCallback(classic)
        }

    }

    getNext(index, sCallback) {
        let key = this._getkey(index + 1)
        let classic = wx.getStorageSync(key)
        if (!classic) {
            this.request({
                url: 'classic/' + index + '/next',
                success: (res) => {
                    wx.setStorageSync(this._getkey(res.data.index),res) 
                    sCallback(res) // 把数据当做参数  传给回调函数
                }
            })
        }else{
            sCallback(classic)
        }

    }

    isFirst(index) {
        console.log(index)
        return index == 1 ? true : false
    }

    isLatest(index) {
        let latestIndex = wx.getStorageSync('latest')
        return latestIndex == index ? true : false
    }

    // 产生 缓存的Key
    _getkey(index) {
        let key = 'classics-' + index
        return key
    }
}