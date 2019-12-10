import request from '@/utils/request'
<<<<<<< HEAD
//获取首页品牌列表

export let naimg = (obj)=>{
    return request('/v2-car-getImageList.html',{
        params:{
            SerialID:obj
        }
    })
}
=======

//获取图片页面数据
export let getImgList=(params)=>{
    console.log(params,"1211111111111111")
    return request("/v2-car-getImageList.html",{params})
}
>>>>>>> zyh
