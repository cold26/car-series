import request from '@/utils/request'
//获取首页品牌列表

export let naimg = (obj)=>{
    return request('/v2-car-getImageList.html',{
        params:{
            SerialID:obj
        }
    })
}
