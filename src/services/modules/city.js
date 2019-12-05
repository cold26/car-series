import request from '@/utils/request';

// 获取城市数据，既axios拿回来的数据
export let nacity = ()=>{
    return request('/location-client.html')
}