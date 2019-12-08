import {getImgList} from '@/services/index'


const state ={
    list:[]
}
//同步操作
const mutations = {
    imageList(state,payload){
        state.list = payload.data.data.map(item=>{
            item.List = item.List.map(val=>{
                val.Url = val.Url.replace("{0}",3)
                return val
            })
            return item
        })
        // console.log(state.list)
    }
}
//异步操作
const actions = {
    async getImageList({commit},payload){
        let res = await getImgList(payload)
        commit('imageList',res)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}