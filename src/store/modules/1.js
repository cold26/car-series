import {getMasterBrandList} from '@/services/index'

const state = {
    list:[]
}

const mutations = {
    updateList(state,payload){
        state.list = payload
    }
}

const actions = {
    async getMasterBrandList({commit},payload){
        let res = await getMasterBrandList();
        let arr =[]
        res.data.data.map(item=>{
            let letter = item.Spelling[0];
            let newArr = res.data.data.filter(item=>item.Spelling[0] == letter)
           
            if(arr.findIndex(item=>item.letter == letter)==-1){
                arr.push({letter,children:newArr})
            }
        })
        // console.log('res')
        commit ('updateList',arr)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}