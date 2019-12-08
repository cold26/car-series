import request from '@/utils/request'

//获取图片页面数据
export let getImgList = (id)=>{
    return request('/v2-car-getImageList.html',{
        params:{
            SerialID:id
        }
    })
}

export let getImgColorList = (SerialID,colorID)=>{
    return request('/v2-car-getImageList.html',{
        params:{
            SerialID:SerialID,
            colorID:colorID
        }
    })
}