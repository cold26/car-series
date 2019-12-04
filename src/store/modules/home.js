import {getMasterBrandList,getMarkList} from '@/services/index'

const state = {
    list:[],
    obj:{},
    arr:[]
}
//渲染列表的数据
function renderList(list){
    let obj = {};
    list.map(item=>{
        if (!obj[item.Spelling.slice(0, 1)]) {
            obj[item.Spelling.slice(0, 1)] = [item];
        } else {
            obj[item.Spelling.slice(0, 1)].push(item);
        }
    })
    return obj;
}



const mutations = {
    updateList(state,payload){
        // console.log(payload)
        state.list = payload
        state.obj = renderList(state.list)
    },
    rigthList(state,payload){
        state.arr = payload.data.data
    }    
}

const actions = {
    async getMasterBrandList({commit},payload){
        let res = await getMasterBrandList();
        commit('updateList',res.data.data)
    },
    async getMarkList({commit},payload){
        let res = await getMarkList(payload);
        commit('rigthList',res)
    },


}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}