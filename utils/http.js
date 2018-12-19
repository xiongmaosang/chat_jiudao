import {config} from '../config.js'

export class HTTP {
    request(params) {
        if (!params.type) {
            params.type = 'GET'
        }
        wx.request({
            url: config.api_base_url + params.url,
            method: params.type,
            data: params.data,
            header: {
                'content_type': 'application/json',
                'appkey': config.appkey
            },
            success: (res) => {
                let code = res.statusCode.toString()
                if (code.startsWith('2')) { // es6方法
                    params.success && params.success(res);
                } else {
                    wx.showToast({
                        title: '错误',
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
            fail: (err) => {
                wx.showToast({
                    title: '错误',
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    }
}