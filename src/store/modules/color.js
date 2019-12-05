import {getModelImageYearColor} from '@/services/index'


const state ={
    obj:{},
    list:[]
}
//同步操作
const mutations = {
    colorList(state,payload){
        state.obj = payload.data.data
        state.list = Object.keys(state.obj)
        console.log(state.obj,"111111111111222222222")
        console.log(state.list,"qqqqqqqqqqqqqqqqqqqqq")
    }
}
//异步操作
const actions = {
    async getModelImageYearColor({commit},payload){
        let res = await getModelImageYearColor(payload)
        console.log(res,"111111111111111111111111")
        commit('colorList',res)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}