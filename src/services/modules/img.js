import request from '@/utils/request'

//获取图片页面数据
export let getImgList=(params)=>{
    console.log(params,"1211111111111111")
    return request("/v2-car-getImageList.html",{params})
}
