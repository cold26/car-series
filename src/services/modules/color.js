import request from '@/utils/request'
<<<<<<< HEAD
//获取首页品牌列表

export let getcolor = (obj)=>{
    return request('/v2-car-getModelImageYearColor.html',{
        params:{
            SerialID:obj
=======

//获取详情页面数据
export let getModelImageYearColor = (id)=>{
    return request('/v2-car-getModelImageYearColor.html',{
        params:{
            SerialID:id
>>>>>>> zyh
        }
    })
}
