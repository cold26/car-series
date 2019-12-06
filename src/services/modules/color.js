import request from '@/utils/request'
//获取首页品牌列表

export let getcolor = (obj)=>{
    return request('/v2-car-getModelImageYearColor.html',{
        params:{
            SerialID:obj
        }
    })
}
