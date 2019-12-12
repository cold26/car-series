import request from '@/utils/request'

//获取详情页面数据
export let getDetailList = (id)=>{
    return request('/v2-car-getInfoAndListById.html',{
        params:{
            SerialID:id
        }
    })
}

