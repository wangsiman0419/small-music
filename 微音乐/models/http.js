var baseUrl="http://localhost:3000/";
function http({url,data}){
    return new Promise((resolve,rejecet)=>{
        wx.request({
            url:baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                rejecet(err)
            }
        });
    })
}
module.exports={
    bannerUrl:()=>{
        return http({
            url:'banner'
        })
    },
    NewMv:()=>{
        return http({
            url:'mv/first',
        })
    },
    RcmdMv:()=>{
        return http({
            url:'mv/exclusive/rcmd'
        })
    },
    RankMv:()=>{
        return http({
            url:'top/mv'
        })
    },
    MvDetail:(id)=>{
        return http({
            url:`mv/url?id=${id}`
        })
    },
    MvSame:(id)=>{
        return http({
            url:`simi/mv?mvid=${id}`
        })
    },
    CommentMv:(id)=>{
        return http({
            url:`comment/mv?id=${id}`
        })
    },
    Search:(keywords)=>{
        return http({
            url:`search?keywords=${keywords}`,
        })
    },
    HotSearch:()=>{
        return http({
            url:'personalized/newsong'
        })
    },
    Album:()=>{
        return http({
            url:'top/album'
        })
    },
    AlbumSong:(id)=>{
         return http({
             url:'album?id='+id
         })
    },
    HotDj:()=>{
        return http({
            url:'dj/hot'
        })
    },
    ToplistDj:()=>{
        return http({
            url:'dj/program/toplist'
        })
    },
    RecommentDj:()=>{
        return http({
            url:'program/recommend'
        })
    },
    DjPlay:(id)=>{
       return http({
           url:'song/url?id='+id
       })
    },
    MusicPlay:(id)=>{
        return http({
            url:'lyric?id='+id
        })
    },
    HotSinger:()=>{
        return http({
            url:'artist/list'
        })
    },
    SingerSongs:(id)=>{
        return http({
            url:'artist/top/song?id='+id
        })
    },
    Rank:()=>{
        return http({
            url:'personalized/newsong'
        })
    },
    getPlay:(id)=>{
        return http({
            url:'song/url?id='+id
        })
    },
    getCat:(cat)=>{
        return http({
            url:"top/playlist",
            data:{
                cat,
            }
        })
    },
    getList:(id)=>{
        return http({
            url:'playlist/detail?id='+id
        })
    },

};