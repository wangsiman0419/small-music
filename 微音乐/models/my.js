var baseUrl="http://yapi.demo.qunar.com/mock/34774/"
function http({url}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data: {},
            method: 'GET', 
            success: function(res){
               resolve(res)
            },
            fail: function(err) {
                reject(err)
            }
        })
    })
}
module.exports={
    getMusic:()=>{
        return http({
            url:'music'
        })
    },
    getCreate:()=>{
        return http({
            url:"create"
        })
    },
    getMusics:()=>{
        return http({
            url:"musics"
        })
    }
}