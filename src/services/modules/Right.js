import request from '@/utils/request'

//获取详情页面数据
export let getShi = (obj)=>{
    
    return request('/v1-city-alllist.html',{
        params:{
            provinceid:obj
        }
    })
}
