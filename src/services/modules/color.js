import request from '@/utils/request'

//获取详情页面数据
export let getModelImageYearColor = (id)=>{
    return request('/v2-car-getModelImageYearColor.html',{
        params:{
            SerialID:id
        }
    })
}
