import {HTTP} from '../utils/http-promise.js'

export class BookModel extends HTTP {
    getHotList(){
        return this.request({
            url:'book/hot_list',   
            
            // url:'classic/hot_list',
            // data:{
            //     name:'1',
            //     age:18
            // },
            // methods:'POST'
        })
    }

    search(start,q){
        return this.request({
            url:"book/search?summary=1",
            data:{
                q:q,
                start:start
            }
        })
    }

    getDetail(bid){
        return this.request({
            url:`book/${bid}/detail`
        })
    }

    getLikeStatus(bid){
        return this.request({
            url:`book/${bid}/favor`
        })
    }

    getComment(bid){
        return this.request({
            url:`book/${bid}/short_comment`
        })
    }

    postComment(bid,comment){
        return this.request({
            url:'book/add/shot_comment',
            method:'post',
            data:{
                book_id:bid,
                content:comment
            }
        })
    }
    
}

