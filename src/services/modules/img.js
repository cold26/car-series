import request from '@/utils/request'

//获取详情页面数据
export let getImgList = (id)=>{
    return request('/v2-car-getImageList.html',{
        params:{
            SerialID:id
        }
    })
}
