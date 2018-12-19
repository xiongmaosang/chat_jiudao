import {config} from '../config.js'

export class HTTP {
    request({url,data={},method='GET'}){
        return new Promise ((resolve,reject)=>{
                wx.request({
                    url: config.api_base_url + url,
                    method: method,
                    data: data,
                    header: {
                        'content_type': 'application/json',
                        'appkey': config.appkey
                    },
                    success: (res) => {
                        const code = res.statusCode.toString()
                        if (code.startsWith('2')) {     // es6方法
                            resolve(res);
                        } 
                        else {
                            reject()
                            wx.showToast({
                                title: '错误',
                                icon: 'none',
                                duration: 2000
                            })
                        }
                    },
                    fail: (err) => {
                        reject()
                        wx.showToast({
                            title: '错误',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                })
        })
    }
}