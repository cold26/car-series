import {getModelImageYearColor} from '@/services/index'


const state ={
    obj:{},
    list:[],
}
//同步操作
const mutations = {
    colorList(state,payload){
        state.obj = payload.data.data
        let list = [];
        Object.keys(state.obj).forEach(function(key){
            list.push({key,color:state.obj[key]})
        })
        list.sort(function(a,b){
            return b.key - a.key
        })
        

       state.list = list
       console.log(state.list,"11111111111")
    }
}
//异步操作
const actions = {
    async getModelImageYearColor({commit},payload){
        let res = await getModelImageYearColor(payload)
        commit('colorList',res)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced:true
}