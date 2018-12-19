import {HTTP} from '../utils/http.js'

export class LikeModel extends HTTP {
    like(behavior, artID, category) {
        let url = behavior == 'like' ? 'like' : 'like/cancel'
        this.request({
            url: url,
            type: 'POST',
            data: {
                art_id: artID,
                type: category // 点赞的类型
            },
            success: (data) => {
                console.log(data)
            }
        })
    }

    getClassicLikeStatus(artID, category, sCallback) {
        var params = {
            url: 'classic/' + category + '/' + artID + '/favor',
            success: sCallback
        }
        this.request(params)
    }
}