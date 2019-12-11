import request from '@/utils/request'

//获取图片页面数据
export let getImgList=(params)=>{
    console.log(params)
    return request("/v2-car-getImageList.html",{params})
}
<<<<<<< HEAD
=======

export let getPictureList=(params)=>{
    return request("/v2-car-getCategoryImageList.html",{params})
}
>>>>>>> zyh
