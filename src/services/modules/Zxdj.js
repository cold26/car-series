import request from '@/utils/request';

// 获取首页品牌列表
export let nashuju = (obj)=>{
    console.log(obj)

    return request('/v2-dealer-alllist.html',{
        params:{
            cityId:obj.cityId,
            carId:obj.carId
        }
    })
}