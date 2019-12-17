import request from '@/utils/request'

//获取图片页面数据
export let getImgList=(params)=>{
    return request("/v2-car-getImageList.html",{params})
}

export let getPictureList=(params)=>{
    return request("/v2-car-getCategoryImageList.html",{params})
}
